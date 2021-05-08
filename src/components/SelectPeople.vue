<template>
    <div>
        <ul>
            <li>
                <ul class="people-prop" v-for="people in selectPeople">
                    <li><strong>first_name:</strong> {{people.first_name}}</li>
                    <li><strong>last_name:</strong> {{people.last_name}}</li>
                    <li>id: {{people.id}}</li>
                    <li>email: {{people.email}}</li>
                    <li><img :src="people.avatar"/></li>
                </ul>
            </li>

        </ul>
    </div>
</template>

<script>
  export default {
    name: "SelectPeople",
    data() {
      return {
        selectPeople: null
      }
    },
    async created() {
      console.log('this.$route.params.id', this.$route.params.id);
      const people = await this.$store.dispatch('getSelectPeople', this.$route.params.id);
      console.log('people from component', people);
      this.selectPeople = people;
    }
  }
</script>

<style scoped lang="scss">
    ul {
        list-style-type: none;
        padding: 0;
    }

    .people-prop {
        margin-top: 30px;
        background-color: #53d49a;

        li {
            margin-top: 10px;
        }
    }
</style>
