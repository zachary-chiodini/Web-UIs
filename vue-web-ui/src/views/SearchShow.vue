<template>
  <div>
    <the-header :title="'Search Database'"/>
    <section class="selection-panel">
      <button 
        class="selection-bar"
        @click="displayOptionsPanel()"
      >
        Select the Database Entity or Entities to Query
        <span class="caret" v-if="displayOptionsBool">
          &#9650;
        </span>
        <span class="caret" v-else>
          &#9660;
        </span>
      </button>
      <div class="options-panel" v-if="displayOptionsBool">
        <div v-for="entity in entitySelection" :key="entity.id">
          <div class="option">
            <input
              type="checkbox" 
              v-model="checked[entity.id]"
              >
            <label>{{ convertName(entity.name) }}</label>
          </div>
        </div>
        <div class="close-or-execute">
          <button class="close" @click="displayOptionsPanel()">
            Close
          </button>
          <span class="space"></span>
          <button 
            class="execute" 
            :disabled="!entityChecked()"
          >
            <router-link
              @click="displayOptionsPanel()"
              :class="{ disabled: !entityChecked()}"
              :to="{
                name: 'AgGridShow',
                params: {
                  entity: entitySelection[getSelectedIndex()].name,
                  chemTransDb: entitySelection[getSelectedIndex()].chemTransDb
                }
              }"
            >
              Execute
            </router-link>
          </button>
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: { TheHeader },
  data() {
    return {
      entitySelection: [
        {id: 0, name: 'compounds', chemTransDb: 0},
        {id: 1, name: 'generic_substances', chemTransDb: 0},
        {id: 2, name: 'substance_relationships', chemTransDb: 0},
        {id: 3, name: 'substance_relationship_types', chemTransDb: 0},
        {id: 4, name: 'qc_levels', chemTransDb: 0},
        {id: 5, name: 'author', chemTransDb: 1},
        {id: 6, name: 'citation', chemTransDb: 1},
        {id: 7, name: 'kinetics', chemTransDb: 1},
        {id: 8, name: 'transformation_view', chemTransDb: 1}
      ],
      checked: [false, false, false, false, false, false, false, false],
      displayOptionsBool: false
    }
  },
  methods: {
    convertName(name) {
      return name.replaceAll('_', ' ')
        .replaceAll(/\b\w/g, char => char.toUpperCase())
    },
    displayOptionsPanel() {
      if (this.displayOptionsBool) {
        this.displayOptionsBool = false
      } else {
        this.displayOptionsBool = true
      }
    },
    entityChecked() {
      return this.checked.some(bool => bool)
    },
    getSelectedIndex() {
      const index = this.checked.indexOf(true)
      if (index === -1) {
        return 0
      } else {
        return index
      }
    }
  }
}
</script>

<style>
a {
  color: #003F65;
  text-decoration: none;
}
.selection-panel {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 50%;
  margin: auto;
}
button.selection-bar {
  border: 1px solid #003F65;
  color: #003F65;
  font-weight: bold;
  display: block;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
button.selection-bar .caret {
  float: right
}
.options-panel {
  text-align: left;
  padding-top: 5px;
  border-left: 1px solid #003F65;
  border-right: 1px solid #003F65;
  border-bottom: 1px solid #003F65;
}
.options-panel .option {
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
.close-or-execute {
  text-align: right;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
}
.close-or-execute .execute {
  font-size: 18px;
}
.close-or-execute .space {
  padding: 5px;
}
.close-or-execute .close {
  font-size: 18px;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>