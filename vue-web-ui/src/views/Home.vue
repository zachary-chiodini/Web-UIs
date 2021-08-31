<template>
  <the-header :title="'Home Page'"/>
  <the-entity-table
    :schema="[
      { id: 0, name: 'Table Name 1', showColumnsBool: false, columns: [
          { id: 0, name: 'Attribute 1', meta: 'None 1' }
        ]
      },
      { id: 1, name: 'Table Name 2', showColumnsBool: false, columns: [
          { id: 0, name: 'Attribute 2', meta: 'None 2' }
        ] 
      }
    ]"
  />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheEntityTable from "@/components/TheEntityTable.vue"

export default {
  components: { TheHeader, TheEntityTable }
}
</script>
