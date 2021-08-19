<template>
  <TheBanner/>
  <TheNavigation/>
  <router-view></router-view>
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import TheNavigation from "@/components/TheNavigation";

export default {
  components: { TheBanner, TheNavigation },
};
</script>

<style>
@import "assets/style.css";
</style>
