import Vue from 'vue'
import Vuex from 'vuex'

import { getDocuments } from '@/services/collections'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: {}
  },
  mutations: {
    setHome (state, home) {
      state.home = home
    }
  },
  actions: {
    getHome ({ commit }) {
      getDocuments('root', 'home')
        .then(resp => {
          commit('setHome', resp)
        })
    }
  }
})
