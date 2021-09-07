import axios from 'axios'

const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
        axios.defaults.headers = {
            "content-type": "application/json;charset=utf-8",
            "accept": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        };
    },

    setHeader(token) {
        axios.defaults.headers[ 'x-access-token' ] = token
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    // eslint-disable-next-line no-unused-vars
    customRequest(data , context ) {
        return axios(data)
    },
    api_promise(context, payload, callback = () => {} ) {
        return new Promise( (resolve, reject) => {
            this.customRequest(payload, context).then(response => {
                resolve(response)
                callback(context,response)
            }).catch(reason => {
                reject(reason)
            })
        })
    }
}

export default ApiService
