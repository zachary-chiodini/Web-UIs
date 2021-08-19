<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">
      Home
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
  </div>
</template>

<style>
#nav {
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  background: whitesmoke;
  border-bottom: 2px solid #4e6c71;
}
#nav a {
  display: inline-block;
  color: #2c3e50;
  margin-right: 20px;
  margin-left: 20px;
}
#nav a:link {
  text-decoration: none;
}
</style>