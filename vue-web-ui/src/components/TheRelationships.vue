<template>
  <div>
    <svg>
      <path
        :d="`M${points[0][0]}, ${points[0][1]} 
          C${getCenterPointX(points[0], points[1], 1/3)}, ${points[0][1]} 
          ${getCenterPointX(points[0], points[1], 2/3)}, ${points[1][1]} 
          ${points[1][0]}, ${points[1][1]}`"
      />
      <rect :x="calcBezierPointX(points, 0.4, -5)" :y="calcBezierPointY(points, 0.4, -15)" />
      <text :x="calcBezierPointX(points, 0.4, 0)" :y="calcBezierPointY(points, 0.4, 0)">N</text>
      <rect :x="calcBezierPointX(points, 0.6, -5)" :y="calcBezierPointY(points, 0.6, -15)" />
      <text :x="calcBezierPointX(points, 0.6, 0)" :y="calcBezierPointY(points, 0.6, 0)">1</text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    points: { type: Array, required: true }
  },
  methods: {
    bezierCurve(x1, x2, x3, x4, t){
      return Math.pow(1 - t, 3)*x1 + 3*Math.pow(1 - t, 2)*t*x2 + 3*(1 - t)*Math.pow(t, 2)*x3 + Math.pow(t, 3)*x4
    },
    getCenterPointX(r1, r2, a) {
      const x1 = r1[0],  x2 = r2[0]
      return x1 + a*(x2 - x1)
    },
    calcBezierPointX(r, t, d) {
      return this.bezierCurve(r[0][0], this.getCenterPointX(r[0], r[1], 1/3), this.getCenterPointX(r[0], r[1], 2/3), r[1][0], t) + d
    },
    calcBezierPointY(r, t, d) {
      return this.bezierCurve(r[0][1], r[0][1], r[1][1], r[1][1], t) + d
    },
    bezierAngle(r) {
      const e1 = [this.calcBezierPointX(r, 0, 0), this.calcBezierPointY(r, 0, 0)]
      const e2 = [this.calcBezierPointX(r, 1, 0), this.calcBezierPointY(r, 1, 0)]
      const x = e2[0] - e1[0]
      const y = e1[1] - e2[1]
      return Math.atan(y/x)
    }
  }
}
</script>

<style>
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
  fill: white;
  width: 20px;
  height: 20px;
}
</style>