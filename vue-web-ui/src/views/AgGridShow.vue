<template>
  <div class='ag-grid'>
    <ag-grid-vue
      style="height: 62vh;"
      class="ag-theme-alpine"
      rowSelection="multiple"
      :columnDefs="columnDefs"
      :rowData="query">
    </ag-grid-vue>
  </div>
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
      dssToxApiUrl: 'http://127.0.0.1:5001/api'
    }
  },
  components: { AgGridVue },
  computed: {

  },
  methods: {
    pushColumnDef(column, checkboxOption) {
      this.columnDefs.push({ 
        field: column, 
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
    resetColumnDefs() {
      this.columnDefs = []
    },
    async getRequest(apiUrl) {
      const response = await fetch(`${apiUrl}/${this.entity}`)
      this.query = await response.json()
      this.getColumnDefs()
    },
    async initQuery() {
      this.resetColumnDefs()
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

<style>
.ag-grid {
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>