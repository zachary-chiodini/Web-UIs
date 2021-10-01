<template>
  <div> 
    <the-header :title="'Home Page'"/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import schemaSourceData from "@/assets/schema.json";

export default {
  components: { TheHeader },
  data() {
    return {
      schemaData: schemaSourceData
    }
  }
}
</script>
