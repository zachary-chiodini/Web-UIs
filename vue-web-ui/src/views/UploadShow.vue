<template>
  <div>
    <the-page-header :title="'Post to Database'"/>
    <the-cross-ref style="padding: 20px; text-align: left" />
    <br/>
    <ag-grid-vue
      :style="`height: ${120 + (rowData.length - 1)*50}px; 
        padding-left: 20px; 
        padding-right: 20px; 
        padding-bottom: 20px`"
      class="ag-theme-alpine"
      rowHeight="50"
      enableCellTextSelection="true"
      ensureDomOrder=true
      :columnDefs="columnDefs"
      :rowData="rowData"
    />
    <div class="grid-buttons">
      <button @click="addRow()">
        Add Row
      </button>
      <button @click="delRow()" :disabled="rowData.length == 1">
        Delete Row
      </button>
      <button>
        Upload
      </button>
    </div>
  </div>
</template>

<script>
import ThePageHeader from "@/components/TheHeader/ThePageHeader.vue";
import TheCrossRef from "@/components/TheCrossRef.vue";
import { AgGridVue } from "ag-grid-vue3";

export default {
  components: { ThePageHeader, TheCrossRef, AgGridVue },
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
        { headerName: "Parent DSSTox ID", field: "predecessor_dsstox_id", 
          resizable: true, editable: true },
        { headerName: "Parent Preferred Name", field: "predecessor_preferred_name", 
          resizable: true, editable: true },
        { headerName: "Parent Structure", field: "predecessor_structure", 
          resizable: true, editable: true },
        { headerName: "Product DSSTox ID", field: "successor_dsstox_id", 
          resizable: true, editable: true },
        { headerName: "Product Preferred Name", field: "successor_preferred_name", 
          resizable: true, editable: true },
        { headerName: "Product Structure", field: "successor_structure", 
          resizable: true, editable: true },
        { headerName: "pH", field: "pH", 
          resizable: true, editable: true },
        { headerName: "Mininmum pH", field: "pH_min", 
          resizable: true, editable: true },
        { headerName: "Maximum pH", field: "pH_max", 
          resizable: true, editable: true },
        { headerName: "Half-life", field: "half_life", 
          resizable: true, editable: true },
        { headerName: "Minimum Half-life", field: "half_life_min", 
          resizable: true, editable: true },
        { headerName: "Maximum Half-life", field: "half_life_max", 
          resizable: true, editable: true },
        { headerName: "Half-life Units", field: "half_life_units", 
          resizable: true, editable: true },
        { headerName: "Rate", field: "rate", 
          resizable: true, editable: true },
        { headerName: "Minimum Rate", field: "rate_min", 
          resizable: true, editable: true },
        { headerName: "Maximum Rate", field: "rate_max", 
          resizable: true, editable: true },
        { headerName: "Rate Units", field:  "rate_units", 
          resizable: true, editable: true },
        { headerName: "Activation Energy (kcal/mol)", field: "activation_kcal_per_mol", 
          resizable: true, editable: true },
        { headerName: "Temperature (C)", field: "temp_C", 
          resizable: true, editable: true },
        { headerName: "Reaction", field: "reaction", 
          resizable: true, editable: true },
        { headerName: "Comments", field: "comments", 
          resizable: true, editable: true },
        { headerName: "Authors", field: "authors", 
          resizable: true, editable: true },
        { headerName: "Year", field: "year", 
          resizable: true, editable: true },
        { headerName: "Month", field: "month",
          resizable: true, editable: true },
        { headerName: "Day", field: "day", 
          resizable: true, editable: true },
        { headerName: "Publisher", field: "publisher", 
          resizable: true, editable: true },
        { headerName: "Title", field: "title", 
          resizable: true, editable: true },
        { headerName: "Journal", field: "journal", 
          resizable: true, editable: true },
        { headerName: "Volume", field: "volume", 
          resizable: true, editable: true },
        { headerName: "Issue", field: "issue", 
          resizable: true, editable: true },
        { headerName: "Pages", field: "pages", 
          resizable: true, editable: true },
        { headerName: "DOI", field: "doi", 
          resizable: true, editable: true },
        { headerName: "URL", field: "url", 
          resizable: true, editable: true },
        { headerName: "PDF", field: "pdf", 
          resizable: true, editable: true }
      ]
    }
  },
  methods: {
    addRow() {
      this.rowData.push({
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
      })
    },
    delRow() {
      this.rowData.pop()
    }
  }
}
</script>

<style>
.grid-buttons {
  text-align: right;
  padding-bottom: 12px
}
.grid-buttons button {
  font-size: 12px;
  margin-right: 20px;
}
</style>
