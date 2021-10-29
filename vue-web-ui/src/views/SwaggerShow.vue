<template>
  <div>
    <the-page-header :title="'Chemical Transformation Database API'"/>
    <div class="swagger" id="swagger"></div>
  </div>
</template>

<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import ThePageHeader from "@/components/TheHeader/ThePageHeader.vue";

export default {
  components: { ThePageHeader },
  mounted() {
    const spec = require('@/assets/swagger.json');
    SwaggerUI({ spec: spec, dom_id: '#swagger' })
  }
}
</script>