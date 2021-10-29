<template>
  <div id="nav">
    <router-link :to="{name: 'SearchShow'}">
      Search
    </router-link>
    |
    <router-link :to="{name: 'UploadShow'}">
      Upload
    </router-link>
    |
    <div class="info" @click="showInfo()">
      Info
    </div>
    |
    <div class="drop-down" v-if="showInfoBool" @mouseleave="showInfo()">
      <router-link :to="{name: 'SwaggerShow'}">
        Swagger API Doc
      </router-link>
      <router-link :to="{name: 'SchemaShow'}">
        Schema
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfoBool: false
    }
  },
  methods: {
    showInfo() {
      if (this.showInfoBool) {
        this.showInfoBool = false
      } else {
        this.showInfoBool = true
      }
    }
  }
}
</script>

<style>
#nav {
  margin: 0;
  padding: 5px;
  font-family: calibri;
  font-size: 15px;
  color: white;
  background: #0E6993;
  text-shadow: 0px 0px 1px grey;
  box-shadow: 0px 0px 5px grey;
}
#nav a{
  display: inline-block;
  color: white;
  margin-right: 20px;
  margin-left: 20px;
}
#nav a:link {
  text-decoration: none;
}
#nav .info{
  cursor: pointer;
  display: inline-block;
  color: white;
  margin-right: 20px;
  margin-left: 20px;
}
#nav .drop-down {
  position: absolute;
  background: #0E6993;
  text-align: left;
  padding-top: 10px;
  margin-left: 200px;
}
#nav .drop-down a{
  display: block;
  padding-bottom: 10px;
  text-shadow: 0px 0px 1px grey;
}
</style>