<template>
  <div class="page-title">
    {{ title }}
  </div>
</template>

<script>
export default {
    props: {
        title: {type: String, required: true}
    }
}
</script>

<style>
.page-title {
  font-family: Calibri;
  font-size: 15px;
  color: white;
  text-align: left;
  text-shadow: 0px 0px 5px grey;
  background: #0071BC;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>