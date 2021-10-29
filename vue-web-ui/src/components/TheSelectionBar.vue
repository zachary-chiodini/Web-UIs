<template>
  <div>
    <button 
      class="selection-bar"
      @click="showOrHideOptionsPanel()"
    >
      {{ mutableTitle }}
      <span class="caret" v-if="displayOptionsBool">
        &#9650;
      </span>
      <span class="caret" v-else>
        &#9660;
      </span>
    </button>
    <div class="options-panel" v-if="displayOptionsBool">
      <div v-for="(label, index) in selections" :key="index">
        <div class="option">
          <label 
            :class="{ disabled: labelChecked() && !checked[index] }"
          >
            <input
              type="checkbox"
              v-model="checked[index]"
              :disabled="labelChecked() && !checked[index]"
            >
            <span>{{ label }}</span>
          </label>
        </div>
      </div>
      <div class="close-or-execute">
        <button class="close" @click="showOrHideOptionsPanel()">
          Close
        </button>
        <span class="space"></span>
        <button 
          class="execute" 
          :disabled="!labelChecked()"
          @click="updateBarTitle(); showOrHideOptionsPanel(); this.$emit('update:selectedIndex', mutableIndex); execute()"
        >
          {{ actionTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    barTitle: { type: String, required: true },
    actionTitle: { type: String, required: true },
    selections: { type: Array, required: true },
    selectedIndex: { type: [Number, null], required: true } 
  },
  data() {
    return {
      mutableTitle: this.barTitle,
      mutableIndex: this.selectedIndex,
      checked: null,
      displayOptionsBool: false
    }
  },
  methods: {
    showOrHideOptionsPanel() {
      if (this.displayOptionsBool) {
        this.displayOptionsBool = false
      } else {
        this.displayOptionsBool = true
      }
    },
    labelChecked() {
      const index = this.checked.indexOf(true)
      if (index === -1) {
        return false
      } else {
        this.mutableIndex = index
        return true
      }
    },
    updateBarTitle() {
      if (this.mutableIndex != null) {
        this.mutableTitle = this.selections[this.mutableIndex]
      }
    },
    execute() {
      this.$emit('execute')
    }
  },
  mounted() {
    this.checked = new Array(this.selections.length)
    for (let i = 0; i < this.selections.length; i++) {
      this.checked[i] = false
    }
  }
}
</script>

<style>
button.selection-bar {
  cursor: pointer;
  border: 1px solid black;
  display: block;
  font-size: 12px;
  padding: 5px;
  width: 100%;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  text-indent: 5px;
  height: 30px;
}
button.selection-bar .caret {
  float: right
}
.options-panel {
  text-align: left;
  padding-top: 5px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}
.option {
  color: black;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
.option label {
  display: inline-block;
  padding-right: 10px;
  white-space: nowrap;
}
.option input {
  vertical-align: middle;
}
.option label span {
  vertical-align: middle;
}
.close-or-execute {
  text-align: right;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
}
.close-or-execute .space {
  padding: 5px;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>