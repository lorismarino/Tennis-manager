import Vue from 'vue'
import Vuex from 'vuex'

import scores from './modules/scores'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:
    {
      scores
    },

  state: {
    players: '',
    service: ''
  },

  mutations: {
    setPlayers (state, data) {
      state.players = data
    },

    setService (state, data) {
      state.service = data
    }
  }
})
