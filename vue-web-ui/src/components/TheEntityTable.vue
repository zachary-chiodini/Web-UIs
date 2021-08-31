<template>
  <div class="draggable" v-for="entity in schema" :key="entity.id">
    <table class="tab">
      <tr>
        <td colspan="2">
          <div class="menu-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="table-name" @click="displayColumns(entity.id)">
              {{ entity.name }}
              <span v-if="showColumnsBools[entity.id]">&#9650;</span>
              <span v-else>&#9660;</span>
          </div>
        </td>
      </tr>
      <div v-if="showColumnsBools[entity.id]">
        <tr class="column" v-for="column in entity.columns" :key="column.id">
          <td>{{ column.name }}</td><td>{{ column.meta }}</td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    schema: { type: Array, required: true }
  },
  data() {
    const showColumnsBools = new Array(this.schema.length)
    for (let i = 0; i < this.schema.length; i++) {
      showColumnsBools[i] = false
    }
    return { showColumnsBools }
  },
  methods: {
    displayColumns(entityId) {
      if (this.showColumnsBools[entityId]) {
        this.showColumnsBools[entityId] = false
      } else {
        this.showColumnsBools[entityId] = true
      }
    }
  },
  mounted() {
    // Make the DIV element draggable:
    const draggableElements = document.getElementsByClassName("draggable");
    for (const element of draggableElements) {
      dragElement(element)
    }
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }
}
</script>

<style>
.draggable {
  position: absolute;
  cursor: move;
}
.tab {
  margin: 0;
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
.table-name {
  color: black;
  margin-left: 23px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
}
.column {
  color: black;
  text-align: left;
}
.column td {
  padding: 5px;
}
</style>