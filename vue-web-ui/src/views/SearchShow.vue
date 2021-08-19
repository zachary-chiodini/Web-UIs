<template>
  <div>
    <the-header :title="'Search Database'"/>
    <the-entity-selection/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheEntitySelection from '@/components/TheEntitySelection.vue'

export default {
  components: { TheHeader, TheEntitySelection }
}
</script>

