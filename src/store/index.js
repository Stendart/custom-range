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
      state.peoples.unshift(payload)
    },
    clearDate(state) {
      state.peoples = []
    }
  },
  actions: {
    async getData({commit}) {
      const url = 'https://reqres.in/api/users?page=1'
      try {
        const response = await fetch(url)
        const data = await response.json();

        // Так как в исходных данных id - не уникален, добавляю собственный
        /*data.forEach((el)=> {
          el.myId = Math.random();
        })*/
        console.log('response', data.data)
        commit('setDate', data.data)
      } catch (e) {
        console.log(e.message)
      }
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
