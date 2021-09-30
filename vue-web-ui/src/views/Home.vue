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
import Raphael from 'raphael';

export default {
  components: { TheHeader, TheEntity },
  data() {
    return {
      schemaData: schemaSourceData
    }
  },
  mounted() {
    this.R = Raphael('streetMap', 408, 262)
    this.R.setViewBox(0, 0, 600, 500)
  }
}
</script>
