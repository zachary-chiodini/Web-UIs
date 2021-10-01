<template>
  <div>
    <svg>
      <line 
        :x1="positions[0][0]" :y1="positions[0][1]" 
        :x2="positions[1][0]" :y2="positions[1][1]" 
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: { 
    relationships: { type: Array, required: true },
    positions: { type: Array, required: true }
    }
}
</script>

<style>
svg {
  height: 500px;
  width: 100%;
}
line {
  stroke: black;
  stroke-width: 1;
}
</style>