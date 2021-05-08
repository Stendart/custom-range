<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th v-for="(tabName, index) in tableHead" :key="index">
                    {{tabName}}
                </th>
            </tr>
            </thead>
            <slot name="loader"></slot>
            <tbody >
            <tr v-for="p in peopleList" :key="p.id" @click="rowClick(p.id)">
                <td>{{p.id}}</td>
                <td>{{p.first_name}}</td>
                <td>{{p.last_name}}</td>
                <td>{{p.email}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    name: "TableComponent",
    props: {
      peopleList: Array,
      tableHead: Array
    },
    data() {
      return {
      }
    },
    methods: {
      rowClick(id) {
        this.$router.push( `/selectPeole/${id}`);
      }
    },
  }
</script>
<style scoped>
    .table {
        width: 100%;
        border-collapse: collapse;
        margin: 0 auto;
    }
    .table caption {
        padding: 1rem 1rem 2rem 1rem;
        font-weight: bold;
        font-size: 21px;
    }
    .table thead {
        border: 2px solid #56433D;
    }
    .table th {
        padding: 10px 20px;
        background: #56433D;
        color: #F9C941;
        border-right: 2px solid;
        font-size: 0.9em;
    }
    .table th:last-child {
        border-right: none;
    }
    .table td {
        vertical-align: middle;
        padding: 10px;
        font-size: 14px;
        text-align: center;
        border-top: 2px solid #56433D;
        border-bottom: 2px solid #56433D;
        border-right: 2px solid #56433D;
    }
    .table td:first-child {
        border-left: 2px solid #56433D;
    }
    .table tbody td {
        text-align: center;
    }
    .table tbody tr:hover {
        background: #eee;
        cursor: pointer;
    }
    .up:after {
        content: '\2191';
        position: absolute;
        margin-left: 10px;
    }
    .down:after {
        content: '\2193';
        position: absolute;
        margin-left: 10px;
    }
</style>
