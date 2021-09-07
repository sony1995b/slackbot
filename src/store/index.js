import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    refresh: false,
    auth: {
        token: null,
        userid: null,
        islogin: false
    },
    workspace: {},
    users: {}
}


const enhanceAccessToken = () => { // 로그인 유지
    state.auth.islogin = true
}

enhanceAccessToken()

export default new Vuex.Store( {
    state,
    getters,
    actions,
    mutations,
    // strict: process.env.NODE_ENV !== 'production'
    strict: false
})
