<template>
  <div>
    <the-page-header :title="'Search Database'"/>
    <div class="search-container">
      <the-search-box
        class="the-search-box"
        v-model:query="chemical"
        :placeholder="'Search Chemical Name or Structure'"
      />
    </div>
    <div class="selection-container">
      <the-selection-bar
        class="the-selection-bar"
        v-model:selectedIndex="selectedIndex"
        :barTitle="'Select Table'"
        :actionTitle="'Select'"
        :selections="selections"
        @execute="selectTable()"
      />
    </div>
    <the-ag-grid
      v-if="showTable"
      :columnDefs="columnDefs"
      :rowData="rowData"
    />
  </div>
</template>

<script>
import ThePageHeader from '@/components/TheHeader/ThePageHeader.vue'
import TheSearchBox from '@/components/TheSearchBox.vue'
import TheSelectionBar from '@/components/TheSelectionBar.vue'
import TheAgGrid from '@/components/TheAgGrid.vue'
import columnData from '@/assets/columnData.js'

export default {
  components: { ThePageHeader, TheSearchBox, TheSelectionBar, TheAgGrid },
  data() {
    return {
      chemical: null,
      rowData: null,
      columnDefs: null,
      selectedIndex: null,
      showTable: false,
      columnData: columnData,
      selections: [
        'Transformation View', 'Generic Substances', 'QC Levels',
        'Substance Relationships', 'Substance Relationship Types', 
        'Compounds', 'Author', 'Citation', 'Kinetics'
      ],
      fields: [
        'transformation_view', 'generic_substances', 'qc_levels',
        'substance_relationships', 'substance_relationship_types', 
        'compounds', 'author', 'citation', 'kinetics'
      ],
      apiUrl: 'http://127.0.0.1:5000/api', //'http://v2626umcth819.rtord.epa.gov:5011/api',
    }
  },
  methods: {
    async getRequest() {
      await fetch(`${this.apiUrl}/connect`)
      const response = await fetch(`${this.apiUrl}/${this.fields[this.selectedIndex]}`)
      this.rowData = await response.json()
    },
    async selectTable() {
      this.showTable = true
      this.rowData = null
      this.columnDefs = await this.columnData[this.fields[this.selectedIndex]]
      await this.getRequest()
    }
  },
}
</script>

<style>
.search-container {
  float: left;
  width: 50%;
}
.the-search-box {
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
}
.selection-container {
  display: inline-block;
  width: 50%;
}
.the-selection-bar {
  padding-left: 10px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
