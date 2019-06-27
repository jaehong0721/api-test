import axios from 'axios';

const moruApi = (function () {
    let endpoint;
    let auth;
    let contentType;
    let headers;
    let config;

    return {
        API: {
            IMAGE_CLOUD: 'https://dwvkajzy3x5eq.cloudfront.net/',
            AUTH: {
                login: 'auth/obtain_token/',
                verifyToken: 'auth/verify_token/',
            },
            VERIFY: {
                verifyStaff: 'api/2/verify/staff/',
                verifyManager: 'api/2/verify/manager/',
            },
            FETCH: {
                fetchManager: 'api/2/fetch/managers/',
                cosmeticETC: 'api/2/fetch/cosmetic_etc/',
                distributor: 'api/2/fetch/cosmetic_etc/',
                manufacturer: 'api/2/fetch/cosmetic_etc/',
                import_company: 'api/2/fetch/cosmetic_etc/',
                country_of_manufacture: 'api/2/fetch/cosmetic_etc/',
                category_tag: 'api/2/fetch/categories/',
                ingredients: 'api/2/fetch/ingredients/',
                keyword: 'api/2/fetch/keywords/',
                noAdditives: 'api/2/fetch/no_additives/',
                intensiveCare: 'api/2/fetch/intensive_care/',
                brand: 'api/2/fetch/brands/',
                brand_line: 'api/2/fetch/brand_lines/',
                features: 'api/2/fetch/features/',
                cosmetic: 'api/2/fetch/upload_cosmetics/',
                imageUrl: 'api/2/get/image/'
            },
            MODIFY: {
                cosmetic: "api/2/modify/cosmetics/",
            }
        },

        /**
         * init moruApi
         * 
         * @param {String} endpoint 
         * @param {String} contentType 
         */
        init: function (endpoint, contentType) {
            this.endpoint = endpoint
            this.contentType = contentType
            
            if (!headers) headers = {}
            headers['Content-Type'] = contentType

            if (!config) config = {}
            config.headers = headers
        },
        setEndpoint: function (addr) {
            endpoint = addr
            return this
        },
        setAuth: function (token) {
            auth = `JWT ${token}`
            if (!headers) headers = {}
            headers['Authorization'] = auth

            if (!config) config = {}
            config.headers = headers
            return this
        },
        setContentType: function (type) {
            contentType = type
            if (!headers) headers = {}
            headers['Content-Type'] = contentType

            if (!config) config = {}
            config.headers = headers
            return this
        },
        /**
         * login
         * 
         * @param {Object} data 
         * @param {String} data.email
         * @param {String} data.password
         */
        login: function (data) {
            return axios.post(
                endpoint + this.API.AUTH.LOGIN,
                data,
                config,
            )
        },
        /**
         * verify token
         * 
         * @param {Object} data 
         * @param {String} data.token auth token
         */
        verifyToken: function (data) {
            return axios.post(
                endpoint + this.API.AUTH.VERIFY_TOKEN,
                data,
                config,
            )
        },
        /**
         * 
         * @param {Object} imageInfo 
         * @param {String} imageInfo.category
         * @param {String} imageInfo.file_name
         */
        fetchImageUrl(imageInfo) {
            return axios.post(
                endpoint + this.API.FETCH.imageUrl,
                imageInfo,
                config
            )
        },
        /**
         * 
         * @param {String} signedUrl 
         * @param {File} file 
         */
        insertImage2S3(signedUrl, imageFile) {
            let newHeader = {}
            newHeader['Content-Type'] = imageFile.type
            return axios.put(signedUrl, imageFile, config)
        },
        verify(api, data) {
            return axios.post(
                endpoint + api,
                data,
                config
            )
        },
        fetch(api, data) {
            return axios.post(
                endpoint + api,
                data,
                config
            )
        },
        modify(api, data) {
            return axios.post(
                endpoint + api,
                data,
                config
            )
        },
    }
})

export default moruApi()