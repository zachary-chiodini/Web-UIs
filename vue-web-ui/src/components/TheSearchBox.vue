<template>
  <div class="search-container">
    <input
      class="search"
      type="text"
      :placeholder="placeholder"
      :value="query"
      @input="this.$emit('update:query', $event.target.value)"
      @keyup.enter="execute()"
    >
    <img  
      class="search" 
      src="@/assets/searchicon.png" 
      alt="Search Icon"
      :class="{ disabled: query == null || query == '' }"
      @click="execute()"
    />
  </div>
</template>

<script>
export default {
  props: {
    query: { type: [String, null], required: true },
    placeholder: { type: String, required: true }
  },
  methods: {
    execute() {
      if (this.query != null && this.query != '') {
        this.$emit('execute')
      }
    }
  }
}
</script>

<style>
div.search-container {
  display: flex;
}
input.search {
  width: 100%;
  font-size: 12px;
  border: 1px solid black;
  background-image: url('../assets/writeicon.png');
  background-size: 20px;
  background-position-y: center;
  background-position-x: 5px;
  background-repeat: no-repeat;
  text-indent: 27px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition:0.3s;
}
input.search:focus {
  background-image: none;
  text-indent: 5px;
}
img.search {
  cursor: pointer;
  width: 22px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  padding: 3px;
  background-color: whitesmoke;
}
img.disabled {
  cursor: default;
  opacity: 0.5;
}
</style>