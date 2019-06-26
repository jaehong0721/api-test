import axios from 'axios';

const API = {
    // IMAGE_CLOUD: 'https://dt7yirqhex1dp.cloudfront.net/image/',
    LOGIN: 'auth/obtain_token/',
    VERIFY_TOKEN: 'auth/verify_token/',
    VERIFY_STAFF: 'api/2/verify/staff/',
    VERIFY_MANAGER: 'api/2/verify/manager/',

}

module.exports = function(){
    let endpoint;
    let auth;
    let contentType;
    let headers;
    
    return {
        setEndpoint: function(addr) {
            endpoint = addr
            return this
        },
        setAuth: function(token) {
            auth = `JWT ${token}`
            if(!headers) headers = {}
            headers['Authorization'] = auth
            return this
        },
        setContentType: function(type) {
            contentType = type
            if(!headers) headers = {}
            headers['Content-Type'] = contentType
            return this
        },
        /**
         * login
         * 
         * @param {email,password} data 
         */
        login: function(data) {
            return axios.post(
                endpoint + API.LOGIN,
                data,
                { headers },
            )
        },
        /**
         * verify token
         * 
         * @param {token} data 
         */
        verifyToken: function(data) {
            return axios.post(
                endpoint + API.VERIFY_TOKEN,
                data,
                { headers }
            )
        },
        /**
         * verify staff
         * 
         * @param {country_code} data 
         */
        verifyStaff: function(data) {
            return axios.post(
                endpoint + API.VERIFY_TOKEN,
                data,
                { headers }
            )
        },
        /**
         * verify manager
         * 
         * @param {country_code} data 
         */
        verifyManager: function(data) {
            return axios.post(
                endpoint + API.VERIFY_MANAGER,
                data,
                { headers }
            )
        },
    }
}