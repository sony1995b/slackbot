export default {
    set_refresh_token: function(state,payload){
        state.auth.token.access_token = payload
    },

    logout: function ( state ) {
        state.auth.refresh = false
        state.auth.userid = null
        state.auth.token = null
        state.auth.islogin = false
    }
}
//동기적인 동작 사용할 때
