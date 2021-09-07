const ApiURL = {
    // host: 'https://gini.fun',
    slack_api: 'https://slack.com/api/',
    cpc_host: 'https://649e-115-138-75-137.ngrok.io/',
    pc_host: 'http://localhost:3001',
    proxy_url: 'https://cors-anywhere.herokuapp.com/',
    getAPIURL() {
        //   console.log(process.env.VUE_APP_API_URL)
        // return process.env.VUE_APP_API_URL
        // return 'http://192.168.100.20:3001';
        return '/'
        // return this.cpc_host
        // eslint-disable-next-line no-unreachable
        let NODE_ENV = process.env.NODE_ENV
        if ( NODE_ENV === 'production') {
            return this.host
        } else if ( NODE_ENV === 'development') {
            return this.dev_host
        } else if ( NODE_ENV === 'local') {
            return this.local_host
        } else if ( NODE_ENV === 'pbls' ) {
            return this.publishing_host
        } else if ( NODE_ENV === 'pc' ) {
            return this.pc_host
        }
    },
    get_workspace_list: 'workspace/list',
    get_user_list: 'user/list',
    post_message: 'post/message'
}
export default ApiURL
