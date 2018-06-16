import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: ''
  },

  mutations: {
    setPlayers (state, data) {
      state.players = data
    }
  }
})
