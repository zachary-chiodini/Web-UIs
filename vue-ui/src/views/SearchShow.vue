<template>
  <the-header :title="'Search Database'"/>
  <div v-if="query" id="query-result">
    <table>
      <tr>
        <th v-for="(val, col) in query[0]" :key="col">
          {{ col }}
        </th>
      </tr>
      <tr v-for="record in query" :key="record.id">
        <td v-for="(val, col) in record" :key="col">
          {{ val }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"

export default {
  components: { TheHeader },
  data() {
    return {
      query: null
    }
  },
  methods: {
    async initQuery() {
      const response = await fetch(
        'http://127.0.0.1:5001/api/generic_substances'
        )
      this.query = await response.json()
    }
  },
  async created() {
    this.initQuery()
    this.$watch(
      () => this.$route.params,
      this.initQuery
    )
  }
}
</script>

<style>
div#query-result {
  overflow: auto;
  height: 70vh;
  width: 100vw;
  margin: auto;
}
#query-result table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}
#query-result td {
  border: 1px solid #4e6c71;
  text-align: center;
}
#query-result th {
  border: 1px solid white;
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 8px;
}
#query-result tr:nth-child(even) {
  background-color: whitesmoke;
}
</style>