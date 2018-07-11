<template>
  <div id="people">
      <v-server-table url="https://jsonplaceholder.typicode.com/users" :columns="columns" :options="options" ></v-server-table>
      <!-- <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table> -->
      <h1>Hai ajah</h1>
      <!-- <pre>{{info}}</pre> -->
  </div>
</template>

<script>

export default {
  name: 'jTable',
  data(){
    return {
      columns: ['name', 'username', 'email', 'id'],
      // tableData: [
      //   { id: 1, name: "John", age: "20" },
      //   { id: 2, name: "Jane", age: "24" },
      //   { id: 3, name: "Susan", age: "16" },
      //   { id: 4, name: "Chris", age: "55" },
      //   { id: 5, name: "Dan", age: "40" }
      // ],
      options: {
        perPage:5,
        // requestAdapter(data) {
	      //   return {
	      //     sort: data.orderBy ? data.orderBy : 'name',
	      //     direction: data.ascending ? 'asc' : 'desc'
        //
	      //   }
	      // },
        responseAdapter({data}) {
          return {
            data,
            count: data.length
          }
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
