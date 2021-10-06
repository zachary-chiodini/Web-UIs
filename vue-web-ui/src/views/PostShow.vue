<template>
  <div>
    <the-header :title="'Post to Database'"/>
    <the-cross-ref style="padding: 20px; text-align: center" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheCrossRef from "@/components/TheCrossRef.vue"

export default {
  components: { TheHeader, TheCrossRef }
}
</script>