<template>
  <div>
    <the-search-box
      v-model:query="query"
      :placeholder="'Search Citation'"
      @execute="getRequest()"
    />
    <div v-if="rowData != null" style="padding-top: 20px">
      <ag-grid-vue
        style="height: 320px;"
        class="ag-theme-alpine"
        rowSelection="multiple"
        enableCellTextSelection="true"
        ensureDomOrder=true
        rowHeight="50"
        :columnDefs="columnDefs"
        :rowData="rowData"
      >
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import TheSearchBox from "@/components/TheSearchBox.vue";
import { AgGridVue } from "ag-grid-vue3";

export default {
  components: { TheSearchBox, AgGridVue },
  data() {
    return {
      query: null,
      nRows: 5,
      rowData: null,
      columnDefs: [],
      headers: [
        "DOI", "URL", "Year", "Month", "Day", "Publisher", "Volume", 
        "Number", "Pages", "Author", "Title", "Journal", "Short"
      ]
    }
  },
  methods: {
    getAuthors(document) {
      let result = ''
      for (const author of document["author"]) {
        result += `${author["given"]} ${author["family"]}, `
      }
      return result.slice(0, -2)
    },
    pushColumnDef(columnName, checkboxBool) {
      this.columnDefs.push({
        headerName: columnName,
        field: columnName,
        resizable: true,
        checkboxSelection: checkboxBool,
        editable: true
      })
    },
    pushURLColumnDef() {
      this.columnDefs.push({
        headerName: "URL",
        field: "URL",
        resizable: true,
        editable: true,
        cellRenderer: function(params) {
          if (params.value != null){
            return (
              `<a href="${params.value}">
                ${params.value}
              </a>`
            )
          } else { return params.value }
        }
      })
    },
    async getRequest() {
      const response = await fetch(
        `https://api.crossref.org/works?query=${this.query}&rows=${this.nRows}`
        )
      const jsonData = await response.json()
      this.columnDefs = []
      if (jsonData["status"] == "failed") {
        this.columnDefs = [{
          headerName: "Status",
          field: "Status",
          resizable: true,
        }]
        this.rowData = [{"Status": "Failed"}]
      } else {
        this.headers.forEach(
          (header, index) => {
            if (index == 0) {
              this.pushColumnDef(header, true)
            } else if (header == "URL") {
              this.pushURLColumnDef()
            } else {
              this.pushColumnDef(header, false)
            }
          }
        )
        this.rowData = []
        for (const document of jsonData["message"]["items"]) {
          this.rowData.push({
            "DOI": Object.keys(document).includes("DOI") ? document["DOI"] : "", 
            "URL": Object.keys(document).includes("URL") ? document["URL"] : "", 
            "Year": Object.keys(document).includes("date-part") ? document["date-part"][0] : "", 
            "Month": Object.keys(document).includes("date-part") ? document["date-part"][1] : "",
            "Day": Object.keys(document).includes("date-part") ? document["date-part"][2] : "",
            "Publisher": Object.keys(document).includes("publisher") ? document["publisher"] : "",
            "Volume": Object.keys(document).includes("volume") ? document["volume"] : "", 
            "Number": Object.keys(document).includes("issue") ? document["issue"] : "", 
            "Pages": Object.keys(document).includes("page") ? document["page"] : "", 
            "Author": Object.keys(document).includes("author") ? this.getAuthors(document) : "", 
            "Title": Object.keys(document).includes("title") ? document["title"].join(", ") : "",
            "Journal": Object.keys(document).includes("container-title") ? document["container-title"].join(", ") : "", 
            "Short": Object.keys(document).includes("short-container-title") ? document["short-container-title"].join(", ") : ""
          })
        }
      }
    }
  }
}
</script>
