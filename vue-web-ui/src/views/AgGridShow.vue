<template>
  <div class='ag-grid'>
    <button 
      v-if="!allRowsSelected"
      @click="selectAllRows(); rowSelected();"
    >
      Select All Rows
    </button>
    <button 
      v-if="allRowsSelected"
      @click="deselectAllRows(); rowSelected();"
    >
      Deselect All Rows
    </button>
    <button
      :disabled="!anyRowSelected"
      @click="exportExcel()"
    >
      Export Selected Row(s)
    </button>
    <ag-grid-vue
      id='grid'
      style="height: 55vh;"
      class="ag-theme-alpine"
      rowSelection="multiple"
      :columnDefs="columnDefs"
      :rowData="query"
      @click="rowSelected()"
      @grid-ready="onGridReady">
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
const ExcelJS = require('exceljs');

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
      anyRowSelected: false,
      allRowsSelected: false
    }
  },
  components: { AgGridVue },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api
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
        sortable: true, 
        filter: true, 
        floatingFilter: true,
        checkboxSelection: checkboxOption
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
.ag-grid {
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.ag-grid button {
  font-size: 18px;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>