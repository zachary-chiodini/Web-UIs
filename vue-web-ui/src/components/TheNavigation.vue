<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">
      Home
    </router-link>
    |
    <router-link :to="{name: 'SwaggerShow'}">
      Swagger API Doc
    </router-link>
    |
    <router-link :to="{name: 'SearchShow'}">
      Search
    </router-link>
    |
    <router-link :to="{name: 'PostShow'}">
      Post
    </router-link>
    |
    <router-link :to="{name: 'SchemaShow'}">
      Schema
    </router-link>
    |
  </div>
</template>

<style>
#nav {
  margin: 0;
  padding: 5px;
  font-family: calibri;
  font-size: 16px;
  color: white;
  background: #0E6993;
  text-shadow: 0px 0px 1px grey;
  box-shadow: 0px 0px 5px grey;
}
#nav a {
  display: inline-block;
  color: white;
  margin-right: 20px;
  margin-left: 20px;
}
#nav a:link {
  text-decoration: none;
}
</style>