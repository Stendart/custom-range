import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peoples: []
  },
  mutations: {
    setDate(state, payload) {
      state.peoples = payload
    },
    addNewRow(state, payload) {
      const user = {...payload, id: Date.now()}
      state.peoples.unshift(user)
    },
    clearDate(state) {
      state.peoples = []
    },
  },
  actions: {
    async getData({commit}) {
      const url = 'https://reqres.in/api/users?page=1'
      try {
        const response = await fetch(url)
        const data = await response.json();
        commit('setDate', data.data)
      } catch (e) {
        console.log(e.message)
      }
    },
    getSelectPeople({state}, id) {
      console.log(state)
      //state.peoples.forEach((el)=> console.log('state.peoples', el.id))
      const people = state.peoples.filter((el) => el.id === +id);
      console.log('people', people)
      return people
    }
  },
  getters: {
    getPeoples(state) {
      return state.peoples
    }
  },
  modules: {
  }
})
