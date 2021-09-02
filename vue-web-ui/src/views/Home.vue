<template>
  <the-header :title="'Home Page'"/>
  <img class="database-schema" src="@/assets/databaseschema.png"/>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"

export default {
  components: { TheHeader }
}
</script>
