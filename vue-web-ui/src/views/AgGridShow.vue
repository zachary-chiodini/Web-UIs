<template>
  <div class='grid-container'>
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
    <div class="grid-title">
      {{ convertName(entity) }} Table
    </div>
    <ag-grid-vue
      style="height: 55vh;"
      class="ag-theme-alpine"
      rowSelection="multiple"
      enableCellTextSelection="true"
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

export default {
  props: {
    entity: { type: String, required: true },
    chemTransDb: { type: Number, required: true },
  },
  data() {
    return {
      query: null,
      columnDefs: [],
      chemTransApiUrl: 'http://v2626umcth819.rtord.epa.gov:5011/api',
      dssToxApiUrl: 'http://v2626umcth819.rtord.epa.gov:5011/api',
      gridApi: null,
      columnApi: null,
      anyRowSelected: false,
      allRowsSelected: false,
      hiddenColumns: [
        'id', 'fk_substance_relationship_id', 'fk_generic_substance_id_predecessor',
        'fk_generic_substance_id_successor', 'fk_substance_relationship_type_id',
        'created_by', 'updated_by', 'created_at', 'updated_at', 'fk_qc_level_id',
        'qc_notes_private', 'uri',
        ],
      transView: [
        "predecessor_dsstox_id", "predecessor_preferred_name", "predecessor_structure",
        "predecessor_casrn","predecessor_type", "predecessor_qc_level",
        "successor_dsstox_id", "successor_preferred_name", "successor_structure",
        "successor_casrn", "successor_type", "successor_qc_level",
        "relationship", "pH", "pH_min", "pH_max", 
        "half_life", "half_life_min", "half_life_max", "half_life_units",
        "rate", "rate_min", "rate_max", "rate_units", "activation_kcal_per_mol",
        "temp_C", "reaction", "comments", "authors", "year", "month", "day",
        "publisher", "title", "journal", "volume", 
        "issue", "pages", "doi", "url", "pdf", "string"
      ]
    }
  },
  components: { AgGridVue },
  methods: {
    convertName(name) {
      return name.replaceAll('_', ' ')
        .replaceAll(/\b\w/g, char => char.toUpperCase())
    },
    hideColumn(columnName) {
      if (this.hiddenColumns.includes(columnName) || columnName.includes('smiles')) {
        return true
      } else { return false }
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
    pushColumnDef(columnName, checkboxOption) {
      if (columnName.includes('dsstox')) {
        this.columnDefs.push({ 
          headerName: this.convertName(columnName),
          field: columnName,
          filter: true,
          floatingFilter: true,
          sortable: true, 
          resizable: true,
          checkboxSelection: checkboxOption,
          enableCellTextSelection: true,
          cellRenderer: function(params) {
            if (params.value != null){
              return (
                `<a 
                class="dsstox-link" 
                href="https://comptox-prod.epa.gov/dashboard/${params.value}">
                  ${params.value}
                </a>`
              )
            } else { return params.value }
          }
        })
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
      } else {
        this.columnDefs.push({
          headerName: this.convertName(columnName),
          field: columnName,
          filter: true,
          floatingFilter: true,
          sortable: true, 
          resizable: true,
          checkboxSelection: checkboxOption,
          enableCellTextSelection: true,
          hide: this.hideColumn(columnName)
        })
      }
    },
    orderViewCols() {
      const newColumnDefs = new Array(this.transView.length)
      this.columnDefs.forEach(
        (columnObject, oldIndex) => {
          const newIndex = this.transView.indexOf(columnObject.field)
          if (oldIndex === 0) {
            columnObject.checkboxSelection = false
          }
          if (newIndex === 0) {
            columnObject.checkboxSelection = true
          }
          newColumnDefs[newIndex] = columnObject
        }
      )
      this.columnDefs = newColumnDefs
    },
    getColumnDefs() {
      Object.keys(this.query[0]).forEach(
        (columnName, index) => {
          if (index === 0) {
            this.pushColumnDef(columnName, true)
          } else {
            this.pushColumnDef(columnName, false)
          }
        }
      )
      if (this.entity === 'transformation_view') {
        this.orderViewCols()
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
  display: inline-block;
  font-weight: bold;
  color: black;
  font-size: 20px;
}
a.dsstox-link {
  color: darkblue;
  text-decoration: underline;
}
img.structure-png {
  width: 97px;
  vertical-align: middle;
}
</style>