<template>
    <div>
        <form @submit.prevent="filter" class="form-control">
            <label for="filter">Введите имя для поиска</label>
            <div class="search-wrap">
                <input ref="search" id="filter" type="text">
                <button type="button" class="btn" @click="filter"> Найти </button>
            </div>
        </form>
    </div>
</template>

<script>
  export default {
    name: "SearchPeople",
    methods: {
      filter() {
        const search = this.$refs.search;
        this.$emit('clickSearch', search.value);
        this.$refs.search.value = '';
      }
    }
  }
</script>

<style scoped lang="scss">
    .search-wrap {
        display: flex;
        justify-content: space-between;

        & input {
            width: 70%;
        }
    }
    .form-control {

        & label {
            text-align: left;
        }
    }
</style>
