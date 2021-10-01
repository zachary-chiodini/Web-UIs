<template>
  <div id="boarder">
    <the-header :title="'Schema'" />
    <div v-for="entity in schema" :key="entity.id"> 
      <the-entity class="draggable" :entity="entity" :position="positions[entity.id]"/>
    </div>
    <the-relationships :relationships="relationships" :positions="positions"/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheEntity from "@/components/TheEntity.vue"
import TheRelationships from "@/components/TheRelationships.vue"
import sourceSchemaData from "@/assets/schema.json"

export default {
  components: { TheHeader, TheEntity, TheRelationships },
  data() {
    return { 
      schema: sourceSchemaData,
      relationships: null,
      positions: [[0, 0], [0, 0]]
    }
  },
  methods: {
    makeElementsDraggableAndGetPositions() {
      const positions_ref = this.positions
      const boarder = document.getElementById("boarder")
      const draggableElements = document.getElementsByClassName("draggable");
      draggableElements.forEach(
        (element, index) => { 
          dragElement(element, index)
          } 
        )
      function dragElement(elmnt, idx) {
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
          let new_top_pos = elmnt.offsetTop - pos2
          let new_left_pos = elmnt.offsetLeft - pos1
          if ((new_top_pos <= (boarder.offsetTop + 45)) || (new_top_pos >= (boarder.offsetTop + boarder.offsetHeight - 35))) {
            new_top_pos = elmnt.offsetTop
          }
          if ((new_left_pos <= (boarder.offsetLeft)) || (new_left_pos >= (boarder.offsetLeft + boarder.offsetWidth - 160))) {
            new_left_pos = elmnt.offsetLeft
          }
          elmnt.style.top = (new_top_pos) + "px";
          elmnt.style.left = (new_left_pos) + "px";
          positions_ref[idx] = [
            elmnt.offsetLeft + elmnt.offsetWidth/2 - 40, 
            elmnt.offsetTop + elmnt.offsetHeight/2 - 170
            ]
        }

        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    }
  },
  mounted() {
    this.makeElementsDraggableAndGetPositions()
  }
}
</script>

<style>
#boarder {
  width: 100%;
  height: 500px;
}
.draggable {
  position: absolute;
  cursor: move;
}
</style>