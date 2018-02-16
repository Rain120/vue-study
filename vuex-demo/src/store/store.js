import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */
const state = {
    count: 1
}

const mutations = {
    add(state, args) {
        state.count += args
    },
    reduce(state, args) {
        state.count--
    }
}

const getters = {
    count: state => state.count += 100
}

const actions = {
    addAction(context) {
        context.commit('add', 20)
        setTimeout(() => {
            context.commit('reduce')
        }, 2000);
    },
    reduceAction({ commit }) {
        commit('reduce')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})