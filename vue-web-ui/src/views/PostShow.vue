<template>
  <div>
    <the-header :title="'Post to Database'"/>
    <the-cross-ref style="padding: 20px; text-align: center" />
    <div v-if="columnDefs != []">
      <ag-grid-vue
        style="height: 120px; padding-left: 20px; padding-right: 20px; padding-bottom: 20px"
        class="ag-theme-alpine"
        enableCellTextSelection="true"
        rowHeight="50"
        :columnDefs="columnDefs"
        :rowData="rowData"
        >
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheCrossRef from "@/components/TheCrossRef.vue";
import { AgGridVue } from "ag-grid-vue3";

export default {
  components: { TheHeader, TheCrossRef, AgGridVue },
  data() {
    return {
      rowData: [{
        predecessor_dsstox_id: "",
        predecessor_preferred_name: "", 
        predecessor_structure: "",
        predecessor_casrn: "",
        successor_dsstox_id: "", 
        successor_preferred_name: "", 
        successor_structure: "",
        successor_casrn: "", 
        pH: "", pH_min: "", pH_max: "", 
        half_life: "", half_life_min: "", half_life_max: "", half_life_units: "",
        rate: "", rate_min: "", rate_max: "", rate_units: "", activation_kcal_per_mol: "",
        temp_C: "", reaction: "", comments: "", 
        authors: "", year: "", month: "", day: "",
        publisher: "", title: "", journal: "", volume: "", 
        issue: "", pages: "", doi: "", url: "", pdf: ""
      }],
      columnDefs: [
        { headerName: "Predecessor DSSTox ID", field: "predecessor_dsstox_id", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Predecessor Preferred Name", field: "predecessor_preferred_name", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Predecessor Structure", field: "predecessor_structure", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Predecessor CASRN", field: "predecessor_casrn", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Successor DSSTox ID", field: "successor_dsstox_id", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Successor Preferred Name", field: "successor_preferred_name", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Successor Structure", field: "successor_structure", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Successor CASRN", field: "successor_casrn", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "pH", filed: "pH", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Mininmum pH", field: "pH_min", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Maximum pH", field: "pH_max", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Half-life", field: "half_life", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Minimum Half-life", field: "half_life_min", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Maximum Half-life", field: "half_life_max", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Half-life Units", field: "half_life_units", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Rate", field: "rate", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Minimum Rate", field: "rate_min", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Maximum Rate", field: "rate_max", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Rate Units", field:  "rate_units", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Activation Energy (kcal/mol)", field: "activation_kcal_per_mol", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Temperature (C)", field: "temp_C", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Reaction", field: "reaction", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Comments", field: "comments", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Authors", field: "authors", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Year", field: "year", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Month", field: "month",
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Day", field: "day", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Publisher", field: "publisher", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Title", field: "title", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Journal", field: "journal", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Volume", field: "volume", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Issue", field: "issue", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "Pages", field: "pages", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "DOI", field: "doi", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "URL", field: "url", 
          resizable: true, enableCellTextSelection: true, editable: true },
        { headerName: "PDF", field: "pdf", 
          resizable: true, enableCellTextSelection: true, editable: true }
      ]
    }
  },
  methods: {
    pushColumnDef(header) {
      this.columnDefs.push({
        headerName: header.name,
        field: header.field,
        resizable: true,
        enableCellTextSelection: true,
        editable: true
      })
    }
  }
}
</script>