<template>
  <div class='grid-container'>
    <ag-grid-vue
      class="ag-theme-alpine"
      rowSelection="multiple"
      enableCellTextSelection=true
      ensureDomOrder=true
      rowHeight="50"
      headerHeight="25"
      floatingFiltersHeight="25"
      :columnDefs="concatTitleColumn(columnDefs)"
      :rowData="rowData"
      @click="rowSelected()"
      @grid-ready="onGridReady">
    </ag-grid-vue>
    <div class="button-container">
      <button
        class="grid-button"
        :disabled="!anyRowSelected"
        @click="exportExcel()"
      >
        Export Selected Row(s)
      </button>
    </div>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import ExcelJS from 'exceljs';

export default {
  props: {
    title: { type: [String, null], required: false },
    columnDefs: { type: [Array, null], required: true },
    rowData: { type: [Array, null], required: true }
  },
  components: { AgGridVue },
  data() {
    return {
      gridApi: null,
      columnApi: null,
      anyRowSelected: false
    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
    rowSelected() {
      if (this.gridApi.getSelectedRows().length === 0) {
        this.anyRowSelected = false
      } else {
        this.anyRowSelected = true
      }
    },
    concatTitleColumn(columnDefs) {
      if (this.title != null && columnDefs != null) {
        const childrenArray = new Array(columnDefs.length)
        for (let i = 0; i < columnDefs.length; i++) {
          childrenArray[i] = { field: columnDefs[i].field }
        }
        const gridTitle = [{ headerName: this.title, children: childrenArray }]
        return gridTitle.concat(columnDefs)
      } else {
        return columnDefs
      }
    },
    download(data) {
      const blob = new Blob([data], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.setAttribute('hidden', '')
      a.setAttribute('href', url)
      a.setAttribute('download', `${this.title}.csv`)
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
    async exportExcel() {
      const workbook = new ExcelJS.Workbook()
      const worksheet = workbook.addWorksheet(`${this.title}`)
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
  updated() {
    if (this.gridApi != null) {
      if (this.rowData === null) {
        this.gridApi.showLoadingOverlay()
      } else {
        this.gridApi.hideOverlay()
      }
    }
  }
}
</script>

<style>
.grid-container {
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.button-container {
  padding-top: 20px;
  text-align: right;
}
.grid-button {
  text-align: right;
  font-size: 12px;
  padding: 5px;
}
a.grid-link {
  color: darkblue;
  text-decoration: underline;
}
img.structure-png {
  width: 48px;
  vertical-align: middle;
}
.structure-png-tooltip {
  width: 100px;
  border: 1px solid black;
}
div.ag-theme-alpine {
  height: 52vh;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
}
div.ag-theme-alpine div.ag-row {
  font-size: 12px;
}
.ag-header-cell-label {
  justify-content: center;
}
.ag-row .ag-cell {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
</style>