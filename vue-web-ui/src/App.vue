<template>
  <TheBanner/>
  <TheNavigation/>
  <div id="content-box">
    <router-view></router-view>
  </div>
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import TheNavigation from "@/components/TheNavigation";

export default {
  components: { TheBanner, TheNavigation },
};
</script>

<style lang="scss">
@import "assets/style.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
