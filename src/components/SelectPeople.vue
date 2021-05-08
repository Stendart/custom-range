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
                    <li>
                        <button class="btn" @click="remove(people.id)">Удалить пользователя</button>
                    </li>
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
    methods: {
      remove(id) {
        this.$store.commit('removePeople', id);
        this.$router.push('/peoleList');
      }
    },
    async created() {
      const people = await this.$store.dispatch('getSelectPeople', this.$route.params.id);
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

    .btn {
        color: #e87070;
    }
</style>
