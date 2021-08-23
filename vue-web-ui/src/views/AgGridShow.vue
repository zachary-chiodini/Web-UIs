<template>
  <ag-grid-vue 
    style="height: 50vh;"
    class="ag-theme-alpine"
    rowSelection="multiple"
    :columnDefs="columnDefs"
    :rowData="query">
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";

export default {
  props: {
    entity: {type: String, required: true},
    chemTransDb: {type: Number, required: true},
  },
  data() {
    return {
      query: null,
      columnDefs: [],
      chemTransApiUrl: '',
      dssToxApiUrl: ''
    }
  },
  components: { AgGridVue },
  methods: {
    pushColumnDef(column, checkboxOption) {
      this.columnDefs.push({ 
        field: column, 
        sortable: true, 
        filter: true, 
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
      if (this.chemTransDb === 1) {
        this.getRequest(this.chemTransApiUrl)
      } else {
        this.getRequest(this.dssToxApiUrl)
      }
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
