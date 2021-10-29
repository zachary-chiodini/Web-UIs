<template>
  <div id="boarder">
    <the-header :title="'Schema'" />
    <div v-for="(entity, index) in schema" :key="index"> 
      <the-entity class="draggable" :entity="entity" :position="initPoints[index]"/>
    </div>
    <div id="relationships">
      <svg>
        <path :d="getBezierPath(points)" />
        <rect :x="getBezierPointX(points, 0.2, -5)" :y="getBezierPointY(points, 0.2, -15)" />
        <text :x="getBezierPointX(points, 0.2, 0)" :y="getBezierPointY(points, 0.2, 0)">N</text>
        <rect :x="getBezierPointX(points, 0.8, -5)" :y="getBezierPointY(points, 0.8, -15)" />
        <text :x="getBezierPointX(points, 0.8, 0)" :y="getBezierPointY(points, 0.8, 0)">1</text>
      </svg>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader/ThePageHeader.vue"
import TheEntity from "@/components/TheEntity.vue"
import sourceSchemaData from "@/assets/schema.json"

export default {
  components: { TheHeader, TheEntity },
  data() {
    return { 
      schema: sourceSchemaData,
      relationships: null,
      initPoints: [[200, 200], [400, 400]],
      points: [[230, 50], [430, 250]],
      anchorSides: ['bottom', 'top']
    }
  },
  methods: {
    bezierCurve(x1, x2, x3, x4, t){
      return Math.pow(1 - t, 3)*x1 + 3*Math.pow(1 - t, 2)*t*x2 + 3*(1 - t)*Math.pow(t, 2)*x3 + Math.pow(t, 3)*x4
    },
    getControlPoint(x, dx, a) {
      return x + a*dx
    },
    vectorAngle(r) {
      const p1 = r[0], p2 = r[1]
      const dx = p2[0] - p1[0]
      const dy = p1[1] - p2[1]
      const angle = 180*Math.atan2(dy, dx)/Math.PI
      if (angle < 0) {
        return 360 + angle
      } else {
        return angle
      } 
    },
    getBezierPath(r) {
      const x1 = r[0][0], x2 = r[1][0]
      const y1 = r[0][1], y2 = r[1][1]
      const dx = x2 - x1, dy = y2 - y1
      if ((this.anchorSides[0] == "bottom") || this.anchorSides[0] == "top") {
        const c1 = this.getControlPoint(y1, dy, 0.5)
        const c2 = this.getControlPoint(y2, -dy, 0.5)
        return `M${x1}, ${y1} C${x1}, ${c1} ${x2}, ${c2} ${x2}, ${y2}`
      } else {
        const c1 = this.getControlPoint(x1, dx, 0.5)
        return `M${x1}, ${y1} C${c1}, ${y1} ${c1}, ${y2} ${x2}, ${y2}`
      }
    },
    getBezierPointX(r, t, d) {
      const x1 = r[0][0], x2 = r[1][0]
      const dx = x2 - x1
      if ((this.anchorSides[0] == "bottom") || this.anchorSides[0] == "top") {
        return this.bezierCurve(x1, x1, x2, x2, t) + d
      } else {
        const c1 = this.getControlPoint(x1, dx, 0.5)
        return this.bezierCurve(x1, c1, c1, x2, t) + d
      }
    },
    getBezierPointY(r, t, d) {
      const y1 = r[0][1], y2 = r[1][1]
      const dy = y2 - y1
      if ((this.anchorSides[0] == "bottom") || this.anchorSides[0] == "top") {
        const c1 = this.getControlPoint(y1, dy, 0.5)
        const c2 = this.getControlPoint(y2, -dy, 0.5)
        return this.bezierCurve(y1, c1, c2, y2, t) + d
      } else {
        return this.bezierCurve(y1, y1, y2, y2, t) + d
      }
    },
    getAnchorPoint(elmnt, angle, index) {
      // rightward
      if ((0 < angle && angle < 45) || (315 < angle && angle < 360)) {
        this.anchorSides[index] = "right"
        return [ 
          elmnt.offsetLeft + elmnt.offsetWidth - 40,
          elmnt.offsetTop + elmnt.offsetHeight/2 - 170
        ]
      // upward
      } else if (45 < angle && angle < 135) {
        this.anchorSides[index] = "top"
        return [
          elmnt.offsetLeft + elmnt.offsetWidth/2 - 40,
          elmnt.offsetTop - 170
        ]
      // leftward
      } else if (135 < angle && angle < 225) {
        this.anchorSides[index] = "left"
        return [
          elmnt.offsetLeft - 40,
          elmnt.offsetTop + elmnt.offsetHeight/2 - 170
        ]
      // downward
      } else {
        this.anchorSides[index] = "bottom"
        return [
          elmnt.offsetLeft + elmnt.offsetWidth/2 - 40,
          elmnt.offsetTop + elmnt.offsetHeight - 170
        ]
      }
    },
    makeElementsDraggable() {
      const points_ref = this.points
      const init_points_ref = this.initPoints
      const schema_ref = this.schema
      const vect_angle_ref = this.vectorAngle
      const get_anchor_ref = this.getAnchorPoint
      const draggableElements = document.getElementsByClassName("draggable");
      draggableElements.forEach(
        (element, index) => { 
          // will need to iterate over all relationships
          const relationship_index = schema_ref[index]["relationship"][0]["index"]
          const relationship_elmnt = draggableElements[relationship_index]
          dragElement(element, index, relationship_elmnt, relationship_index)
          } 
        )
      function dragElement(elmnt, idx, rElmnt, rIdx) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = updateInitPosition;
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
          const new_top_pos = elmnt.offsetTop - pos2
          const new_left_pos = elmnt.offsetLeft - pos1
          elmnt.style.top = (new_top_pos) + "px";
          elmnt.style.left = (new_left_pos) + "px";
          // need to iterate over all endpoints 
          const end_points = [
            [elmnt.offsetLeft + elmnt.offsetWidth/2 - 40, 
              elmnt.offsetTop + elmnt.offsetHeight/2 - 170],
            [rElmnt.offsetLeft + rElmnt.offsetWidth/2 - 40, 
              rElmnt.offsetTop + rElmnt.offsetHeight/2 - 170]
          ]
          const angle = vect_angle_ref(end_points)
          points_ref[idx] = get_anchor_ref(elmnt, angle, idx)
          const rAngle = 180 < angle ? angle - 180 : angle + 180
          points_ref[rIdx] = get_anchor_ref(rElmnt, rAngle, rIdx)
        }

        function updateInitPosition() {
          init_points_ref[idx] = [elmnt.offsetLeft, elmnt.offsetTop]
          closeDragElement()
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
    this.makeElementsDraggable()
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
svg {
  height: 500px;
  width: 100%;
}
path {
  fill: none;
  stroke: black;
  stroke-width: 1;
}
rect {
  fill: #FFFAFA;
  width: 20px;
  height: 20px;
}
</style>