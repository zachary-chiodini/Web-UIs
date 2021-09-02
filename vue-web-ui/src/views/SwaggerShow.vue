<template>
  <the-header :title="'Chemical Transformation Database API'"/>
  <div class="swagger" id="swagger"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { TheHeader },
  mounted() {
    const spec = require('@/assets/swagger.json');
    SwaggerUI({ spec: spec, dom_id: '#swagger' })
  }
}
</script>