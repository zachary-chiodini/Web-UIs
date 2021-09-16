<template>
  <the-header :title="'Home Page'"/>
  <the-entity-table
    :schema="schemaData"
  />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheEntityTable from "@/components/TheEntityTable.vue"
import schemaSourceData from '@/assets/schema.json'

export default {
  components: { TheHeader, TheEntityTable },
  data() {
    return {
      schemaData: schemaSourceData
    }
  }
}
</script>
