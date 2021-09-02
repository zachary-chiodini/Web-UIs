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
      chemTransApiUrl: '',
      dssToxApiUrl: 'http://127.0.0.1:5001/api',
      gridApi: null,
      columnApi: null,
      anyRowSelected: false,
      allRowsSelected: false,
      hiddenColumns: [
        'id', 'fk_substance_relationship_id', 'fk_generic_substance_id_predecessor',
        'fk_generic_substance_id_successor', 'fk_substance_relationship_type_id',
        'created_by', 'updated_by', 'created_at', 'updated_at', 'fk_qc_level_id',
        'qc_notes_private', 'uri', 
        ]
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
    pushColumnDef(columnName, checkboxOption) {
      this.columnDefs.push({ 
        field: columnName,
        filter: true,
        floatingFilter: true,
        sortable: true, 
        resizable: true,
        checkboxSelection: checkboxOption,
        enableCellTextSelection: true,
        hide: this.hiddenColumns.includes(columnName)
      })
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
    },
    async getRequest(apiUrl) {
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
</style>