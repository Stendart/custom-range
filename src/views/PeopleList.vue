<template>
  <div class="people-list">
    <h1>This is an about page</h1>
    <TableComponent :table-head="tableHead" :peopleList="peopleList"></TableComponent>
  </div>
</template>
<script>
  import TableComponent from '../components/TableComponent';
  export default {
    data() {
      return {
        people: [],
        tableHead: ['id', 'firstName', 'lastName', 'email'],
      }
    },
    computed: {
      peopleList() {
        this.people = this.$store.getters.getPeoples
        console.log('people = ', this.people)
        return this.people
      },
    },
    created() {
      this.$store.dispatch('getData')
    },
    components: {
      TableComponent
    }
  }
</script>
