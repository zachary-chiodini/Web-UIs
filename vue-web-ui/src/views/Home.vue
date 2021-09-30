<template>
  <div> 
    <the-header :title="'Home Page'"/>
    <the-entity :schema="schemaData"/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheEntity from "@/components/TheEntity.vue";
import schemaSourceData from "@/assets/schema.json";

export default {
  components: { TheHeader, TheEntity },
  data() {
    return {
      schemaData: schemaSourceData
    }
  }
}
</script>
