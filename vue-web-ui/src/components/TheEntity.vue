<template>
  <table class="entity">
    <tr>
      <td colspan="2">
        <div class="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="entity-name" @click="displayColumns()">
            {{ entity.name }}
            <span v-if="showColumnsBool">&#9650;</span>
            <span v-else>&#9660;</span>
        </div>
      </td>
    </tr>
    <div v-if="showColumnsBool">
      <tr class="entity-field" v-for="column in entity.columns" :key="column.id">
        <td>{{ column.name }}</td><td>{{ column.meta }}</td>
      </tr>
    </div>
  </table>
</template>

<script>
export default {
  props: {
    entity: { type: Array, required: true },
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
.entity-field {
  color: black;
  text-align: left;
}
.entity-field td {
  padding: 5px;
}
</style>