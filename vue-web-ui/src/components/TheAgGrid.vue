<template>
  <div>
    <ag-grid-vue style="width: 500px; height: 500px;"
      class="ag-theme-alpine"
      rowSelection="multiple"
      :columnDefs="columns"
      :rowData="rowData">
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3'

export default {
  name: 'AG Grid Component',
  props: {
    query: { type: Array, required: true }
  },
  data () {
    return {
      columnDefs: []
    }
  },
  components: {
    AgGridVue
  },
  beforeMount () {
    let i = 0
    for (const column in this.rowData[0]) {
      if (i === 0) {
        this.columnDefs.push({ 
          field: column, 
          sortable: true, 
          filter: true, 
          checkboxSelection: true 
        })
      } else {
        this.columnDefs.push({ 
          field: column, 
          sortable: true, 
          filter: true 
        })
      }
      i += 1
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
