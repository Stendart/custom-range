<template>
  <div class="people-list">
    <h1>This is people page</h1>

     <div class="people-list__control-panel">
         <SearchPeople class="search-people" @clickSearch="filterPeople"></SearchPeople>
         <button class="btn" @click="showModal = true">Добавить новую запись</button>
     </div>

    <TableComponent class="table" :table-head="tableHead" :peopleList="peopleList"></TableComponent>

    <Modal title="Новая запись" v-if="showModal" @close="showModal = false">
      <AddNewRow @close="showModal = false"></AddNewRow>
    </Modal>

  </div>
</template>
<script>
  import TableComponent from '../components/TableComponent';
  import Modal from '../components/modal/Modal';
  import AddNewRow from '../components/modal/AddNewRow';
  import SearchPeople from '../components/SearchPeople';

  export default {
    data() {
      return {
        people: [],
        tableHead: ['id', 'firstName', 'lastName', 'email'],
        showModal: false,
        filterStr: null
      }
    },
    methods: {
      filterPeople(fiterStr) {
        this.filterStr = fiterStr;
      }
    },
    computed: {
      peopleList() {
        this.people = this.$store.getters.getPeoples
        if (this.filterStr) {
          return this.people.filter((people) => people.first_name.includes(this.filterStr));
        }
        return this.people;
      },
    },
    components: {
      TableComponent,
      Modal,
      AddNewRow,
      SearchPeople
    }
  }
</script>

<style scoped lang="scss">
    .people-list {
        max-width: 90%;
        margin: 0 auto;
    }
    .people-list__control-panel {
        display: flex;
        justify-content: space-between;
    }
    .search-people {
        width: 50%;
    }
    .table {
        margin-top: 40px;
    }
</style>
