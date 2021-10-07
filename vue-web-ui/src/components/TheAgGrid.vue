<template>
  <div class='grid-container'>
    <div class="grid-title">
      {{ convertName(entity) }} Table
    </div>
    <button 
      class="grid-button"
      v-if="!allRowsSelected"
      @click="selectAllRows(); rowSelected();"
    >
      Select All Rows
    </button>
    <button
      class="grid-button"
      v-if="allRowsSelected"
      @click="deselectAllRows(); rowSelected();"
    >
      Deselect All Rows
    </button>
    <button
      class="grid-button"
      :disabled="!anyRowSelected"
      @click="exportExcel()"
    >
      Export Selected Row(s)
    </button>
    <ag-grid-vue
      style="height: 52vh;"
      class="ag-theme-alpine"
      rowSelection="multiple"
      enableCellTextSelection="true"
      ensureDomOrder=true
      rowHeight="100"
      :columnDefs="columnDefs"
      :rowData="query"
      @click="rowSelected()"
      @grid-ready="onGridReady">
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import ExcelJS from 'exceljs';
import columnSourceData from '@/assets/columndata.json'

export default {
  props: {
    entity: { type: String, required: true },
    chemTransDb: { type: Number, required: true }
  },
  data() {
    return {
      query: null,
      columnDefs: [],
      showColumns: null,
      hideColumns: null,
      chemTransApiUrl: 'http://v2626umcth819.rtord.epa.gov:5011/api',
      dssToxApiUrl: 'http://v2626umcth819.rtord.epa.gov:5011/api',
      gridApi: null,
      columnApi: null,
      anyRowSelected: false,
      allRowsSelected: false
    }
  },
  components: { AgGridVue },
  methods: {
    convertName(name) {
      return name.replaceAll('_', ' ')
        .replaceAll(/\b\w/g, char => char.toUpperCase())
    },
    onGridReady(params) {
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
    selectAllRows() {
      this.gridApi.selectAll()
      this.allRowsSelected = true
    },
    deselectAllRows() {
      this.gridApi.deselectAll()
      this.allRowsSelected = false
    },
    rowSelected() {
      if (this.gridApi.getSelectedRows().length === 0) {
        this.anyRowSelected = false
      } else {
        this.anyRowSelected = true
      }
    },
    hyperlinkColumnDef(columnName, checkboxBool) {
      this.columnDefs.push({ 
        headerName: this.convertName(columnName),
        field: columnName,
        filter: true,
        floatingFilter: true,
        sortable: true, 
        resizable: true,
        checkboxSelection: checkboxBool,
        cellRenderer: function(params) {
          if (params.value != null){
            return (
              `<a 
              class="grid-link" 
              href="https://comptox-prod.epa.gov/dashboard/${params.value}">
                ${params.value}
              </a>`
            )
          } else { return params.value }
        }
      })
    },
    imageColumnDef(columnName) {
      this.columnDefs.push({
        headerName: (
          columnName.charAt(0).toUpperCase() 
          + columnName.slice(1, columnName.indexOf('_')) 
          + ' Structure'
          ),
        field: (
          columnName.charAt(0) 
          + columnName.slice(1, columnName.indexOf('_')) 
          + '_structure'
          ),
        cellRenderer: function(params) {
          if (params.data[columnName] != null) {
            return (
              `<a href="https://ccte-api-ccd.epa.gov/ccdapp1/chemical-files/image/by-dtxsid/${params.data[columnName]}">
                <img 
                  class="structure-png"
                  src="https://ccte-api-ccd.epa.gov/ccdapp1/chemical-files/image/by-dtxsid/${params.data[columnName]}"
                />
              </a>`
            )
          }
        }
      })
    },
    dssToxColumnDef(columnName, checkboxBool) {
      this.hyperlinkColumnDef(columnName, checkboxBool)
      this.imageColumnDef(columnName)
    },
    normColumnDef(columnName, hide, checkboxBool) {
      this.columnDefs.push({
        headerName: this.convertName(columnName),
        field: columnName,
        filter: true,
        floatingFilter: true,
        sortable: true, 
        resizable: true,
        checkboxSelection: checkboxBool,
        hide: hide
      })
    },
    pushColumnDef(columnName, hide, checkboxBool) {
      if (columnName.includes('dsstox')) {
        this.dssToxColumnDef(columnName, checkboxBool)
      } else {
        this.normColumnDef(columnName, hide, checkboxBool)
      }
    },
    pushUriColumnDef(columnName) {
      this.columnDefs.push({
        headerName: "URI",
        field: columnName,
        filter: true,
        floatingFilter: true,
        sortable: true, 
        resizable: true,
        checkboxSelection: true,
        cellRenderer: function(params) {
          if (params.value != null){
            return (
              `<a class="grid-link" href="${params.value}">
                ${params.value}
              </a>`
            )
          } else { return params.value }
        }
      })
    },
    getColumnDefs() {
      this.showColumns = columnSourceData[this.entity]["showColumns"]
      this.hideColumns = columnSourceData[this.entity]["hideColumns"]
      this.showColumns.forEach(
        (columnName, index) => {
          if (index == 0) {
            if (this.showColumns[index] == 'uri') {
              this.pushUriColumnDef('uri')
            } else {
              this.pushColumnDef(columnName, false, true)
            }
          } else {
            this.pushColumnDef(columnName, false, false)
          }
        }
      )
      for (const columnName of this.hideColumns) {
        this.pushColumnDef(columnName, true, false)
      }
    },
    async getRequest(apiUrl) {
      await fetch(`${apiUrl}/connect`)
      const response = await fetch(`${apiUrl}/${this.entity}`)
      this.query = await response.json()
      this.getColumnDefs()
    },
    async initQuery() {
      this.columnDefs = []
      if (this.chemTransDb === 1) {
        this.getRequest(this.chemTransApiUrl)
      } else {
        this.getRequest(this.dssToxApiUrl)
      }
    },
    download(data) {
      const blob = new Blob([data], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.setAttribute('hidden', '')
      a.setAttribute('href', url)
      a.setAttribute('download', `${this.entity}.csv`)
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
    async exportExcel() {
      const workbook = new ExcelJS.Workbook()
      const worksheet = workbook.addWorksheet(`${this.entity}`)
      const selectedData = this.gridApi.getSelectedRows()
      const columnHeaders = new Array(this.columnDefs.length)
      this.columnDefs.forEach(
        (columnObject, index) => {
          columnHeaders[index] = {
            id: index,
            key: columnObject.field,
            name: columnObject.field,
            header: columnObject.field
          }
        }
      )
      worksheet.columns = columnHeaders
      for (const selectedRow of selectedData) {
        worksheet.addRow(selectedRow).commit()
      }
      await workbook.csv.writeBuffer().then(
        data => { this.download(data) }
      )
    }
  },
  async created() {
    this.initQuery()
    this.$watch(
      () => this.$route.params,
      this.initQuery
    )
  },
}
</script>

<style>
.grid-container {
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.grid-button {
  font-size: 18px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.grid-title {
  text-align: center;
  color: black;
  font-size: 25px;
}
a.grid-link {
  color: darkblue;
  text-decoration: underline;
}
img.structure-png {
  width: 97px;
  vertical-align: middle;
}
</style>