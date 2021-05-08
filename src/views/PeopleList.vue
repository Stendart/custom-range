<template>
  <div class="people-list">
    <h1>This is people page</h1>

    <button class="btn" @click="showModal = true">Добавить новую запись</button>
    <TableComponent :table-head="tableHead" :peopleList="peopleList"></TableComponent>

    <Modal v-if="showModal" @close="showModal = false">
      <AddNewRow @close="showModal = false"></AddNewRow>
    </Modal>

  </div>
</template>
<script>
  import TableComponent from '../components/TableComponent';
  import Modal from '../components/modal/Modal';
  import AddNewRow from '../components/modal/AddNewRow';

  export default {
    data() {
      return {
        people: [],
        tableHead: ['id', 'firstName', 'lastName', 'email'],
        showModal: false
      }
    },
    computed: {
      peopleList() {
        this.people = this.$store.getters.getPeoples
        console.log('people = ', this.people)
        return this.people
      },
    },
    components: {
      TableComponent,
      Modal,
      AddNewRow
    }
  }
</script>
