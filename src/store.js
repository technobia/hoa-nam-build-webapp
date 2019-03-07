import Vue from 'vue'
import Vuex from 'vuex'

import { getDocuments, getCollections } from '@/services/collections'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: {},
    banners: []
  },
  mutations: {
    setHome (state, home) {
      state.home = home
    },
    setBanners (state, banners) {
      state.banners = banners
    }
  },
  actions: {
    getHome ({ commit }) {
      getDocuments('root', 'home')
        .then(resp => {
          commit('setHome', resp)
        })
    },
    getBanner ({ commit }) {
      getCollections('banner')
        .then(resp => {
          const collections = []
          resp.forEach(doc => collections.push(doc.data()))
          commit('setBanners', collections)
        })
    }
  }
})
