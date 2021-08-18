<template>
  <div class="page-title">
    {{ title }}
  </div>
  <hr>
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
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  padding-top: 8px;
}
hr {
  border: 0.5px solid #4e6c71;
  background-color: #4e6c71;
  vertical-align: top;
}
</style>