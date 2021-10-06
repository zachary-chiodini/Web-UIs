<template>
  <table 
    class="entity" 
    :style="`left: ${position[0]}px; top: ${position[1]}px`"
    :class="{ top: showColumnsBool }"
  >
    <tr>
      <td :colspan="entity.columns.length">
        <div class="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="entity-name" @click="displayColumns()">
            {{ entity.name }}
            <span class="caret" v-if="showColumnsBool">&#9650;</span>
            <span class="caret" v-else>&#9660;</span>
        </div>
      </td>
    </tr>
    <div v-if="showColumnsBool">
      <tr class="entity-field">
        <td></td>
        <td v-for="(field, index) in Object.keys(entity.columns[0])" :key="index">
          {{ field }}
        </td>
      </tr>
      <tr>
        <td :colspan="entity.columns.length">
          <hr style="border: 0; border-bottom: 1px solid black; margin: 0">
        </td>
      </tr>
      <tr class="entity-field" v-for="(column, colIndex) in entity.columns" :key="colIndex">
        <td style="text-align: right">{{ `${colIndex}.` }}</td>
        <td v-for="(value, index) in Object.values(column)" :key="index">
          {{ value }}
        </td>
      </tr>
    </div>
  </table>
</template>

<script>
export default {
  props: {
    entity: { type: Object, required: true },
    position: { type: Array, required: true }
  },
  data() {
    return { showColumnsBool: false }
  },
  methods: {
    displayColumns() {
      if (this.showColumnsBool) {
        this.showColumnsBool = false
      } else {
        this.showColumnsBool = true
      }
    }
  }
}
</script>

<style>
.entity {
  border: 1px solid black;
  background-color: whitesmoke;
}
.top {
  border: 1px solid black;
  background-color: whitesmoke;
  z-index: 10;
}
.menu-icon {
  position: absolute;
  padding: 5px;
}
.menu-icon div {
  width: 15px;
  height: 0.5px;
  padding: 1.5px;
  background-color: black;
  margin-top: 2px;
  border: 0;
}
.entity-name {
  color: black;
  margin-left: 23px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
}
.caret {
  float: right;
}
.entity-field {
  color: black;
  text-align: left;
  font-size: 15px;
}
.entity-field td {
  padding: 5px;
}
</style>