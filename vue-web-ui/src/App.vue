<template>
  <div>
    <TheBanner/>
    <TheNavigation/>
    <div id="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheBanner from "@/components/TheHeader/TheBanner.vue";
import TheNavigation from "@/components/TheHeader/TheNavigation";

export default {
  components: { TheBanner, TheNavigation }
};
</script>

<style lang="scss">
@import "assets/style.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
