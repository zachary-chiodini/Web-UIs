<template>
  <the-ag-grid
    :entity="entity"
    :chemTransDb="chemTransDb"
  />
</template>

<script>
import TheAgGrid from '@/components/TheAgGrid.vue'

export default {
  components: { TheAgGrid },
  props: {
    entity: { type: String, required: true },
    chemTransDb: { type: Number, required: true }
  }
}
</script>
