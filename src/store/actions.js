import ApiService from "../services/api.service";
import APIUrl from "../config/api-url-list"

export default {
    sample: function(context, payload){
        let send_data ={
            url: APIUrl.slack_install,
            method: 'POST',
            data: {
                user_id: context.state.auth.userid,
                game_type: payload.game_type
            }
        }
        return ApiService.api_promise(context, send_data)
    },
    getWorkspaceList: function(context){
        let send_data ={
            url: APIUrl.cpc_host + APIUrl.get_workspace_list,
            method: 'GET',
            data: {}
        }
        return ApiService.api_promise(context, send_data)
    },
    getUserList: function(context, payload){
        let send_data ={
            url: APIUrl.get_user_list,
            method: 'POST',
            data: {
                token: payload.token
            }
        }

        return ApiService.api_promise(context, send_data)
    },
    postMessage: function(context, payload){
        let send_data ={
            url: APIUrl.post_message,
            method: 'POST',
            data: {
                token: payload.token,
                channel: payload.id,
                text: payload.text
            }
        }

        return ApiService.api_promise(context, send_data)
    },
}
//비동기적인 동작 사용할 때
