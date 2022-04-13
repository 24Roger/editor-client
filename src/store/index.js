import { createStore } from 'vuex';
import { findProjects } from '../api';

export default createStore({
  state: {
    projects: [],
    project: {}

  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload
    },
    setProject(state, payload) {
      state.project = payload
    }
  },
  actions: {
    async getProjects({ commit }) {
      try {
        const data = await findProjects()

        commit('setProjects', data)
      } catch (error) {
        console.log(error)
      }
    },
    getData({ commit }, project) {
      commit('setProject', project)
    }
  },
  getters: {

  },
  modules: {},
});