<template>
  <div class="custom-tooltip" >
    {{ rowData.predecessor_dsstox_id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      rowData: null
    };
  },
  beforeMount() {
    this.rowData = this.params.api.getDisplayedRowAtIndex(this.params.rowIndex).data;
  }
};
</script>

<style>
.custom-tooltip {
  position: absolute;
  border: 1px solid black;
  overflow: hidden;
  background-color: white;
}
</style>
