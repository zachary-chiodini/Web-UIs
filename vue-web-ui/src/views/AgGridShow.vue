<template>
  <the-ag-grid
    v-if="showColumns && hideColumns"
    :entity="{ entity }"
    :showColumns="{ showColumns }"
    :hideColumns="{ hideColumns }"
    :chemTransDb="{ chemTransDb }"
  />
</template>

<script>
import TheAgGrid from '@/components/TheAgGrid.vue'
import columnSourceData from '@/assets/columndata.json'

export default {
  components: { TheAgGrid },
  props: {
    entity: { type: String, required: true },
    chemTransDb: { type: Number, required: true }
  },
  data() {
    return {
      showColumns: null,
      hideColumns: null
    }
  },
  mounted() {
    this.showColumns = columnSourceData[this.entity]["showColumns"]
    this.hideColumns = columnSourceData[this.entity]["hideColumns"]
  }
}
</script>