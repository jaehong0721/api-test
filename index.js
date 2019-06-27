import axios from 'axios';

const API = {
    // IMAGE_CLOUD: 'https://dt7yirqhex1dp.cloudfront.net/image/',
    AUTH: {
        LOGIN: 'auth/obtain_token/',
        VERIFY_TOKEN: 'auth/verify_token/',
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
    },
    MODIFY: {
        BRAND: "api/2/modify/cosmetics/",
    }
}

let endpoint;
let auth;
let contentType;
let headers;
let config;

const moruApi = {
    setEndpoint: function (addr) {
        endpoint = addr
        return this
    },
    setAuth: function (token) {
        auth = `JWT ${token}`
        if (!headers) headers = {}
        headers['Authorization'] = auth
        config.headers = headers
        return this
    },
    setContentType: function (type) {
        contentType = type
        if (!headers) headers = {}
        headers['Content-Type'] = contentType
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
            endpoint + API.AUTH.LOGIN,
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
            endpoint + API.AUTH.VERIFY_TOKEN,
            data,
            config,
        )
    },
    /**
     * 
     * @param {String} api the key of api: "verifyStaff", "verifyManager"
     * @param {Object} data
     * @param {String} data.country_code the country code: "kr", "en"
     */
    verify: function (api, data) {
        return axios.post(
            endpoint + API.VERIFY[api],
            data,
            config
        )
    },
    /**
     * 
     * @param {Object} data 
     * @param {String} data.country_code
     * @param {Number} data.pk 
     * @param {Boolean} data.uploadDetail
     */
    fetchCosmeticDetail: function (data) {
        return axios.post(
            endpoint + API.FETCH.cosmetic,
            data,
            config
        )
    },
    /**
     * 
     * @param {Object} data 
     * @param {String} data.country_code
     * @param {String} data.type "distributor", "manufacturer", "import_company", "country_of_manufacture", "price_source"
     */
    fetchCosmeticEtc: function (data) {
        return axios.post(
            endpoint + API.FETCH.cosmeticETC,
            data,
            config,
        )
    },
    /**
     * 
     * @param {String} api "cosmeticETC"
     * @param {Object} data 
     * @param {String} data.country_code
     * @param {String} data.type "distributor", "manufacturer", "import_company", "country_of_manufacture", "price_source"
     * @param {Boolean} data.detail use it when fetch detail info (true)
     * @param {Number} data.pk use it when fetch detail info
     */
    fetchCosmeticEtcDetail: function (api, data) {
        return axios.post(
            endpoint + API.FETCH[api],
            data,
            config,
        )
    },
    /**
     * 
     * @param {String} api "fetchManager", "category_tag", "brand", "features",
     * @param {Object} data 
     * @param {String} data.country_code
     */
    fetch: function (api, data) {
        return axios.post(
            endpoint + API.FETCH[api],
            data,
            config,
        )
    },
    /**
     * 
     * @param {String} api "brand_lines"
     * @param {Object} data 
     * @param {String} data.country_code
     * @param {Object} data.filter
     * @param {String} data.filter.brand_id 
     */
    fetchBrandLines: function (api, data) {
        return axios.post(
            endpoint + API.FETCH[api],
            data,
            config,
        )
    },
    /**
     * 
     * @param {String} api "brand_lines"
     * @param {Object} data 
     * @param {String} data.country_code
     * @param {Boolean} data.detail use it when fetch detail info (true)
     * @param {Number} data.pk use it when fetch detail info
     */
    fetchBrandLines: function (api, data) {
        return axios.post(
            endpoint + API.FETCH[api],
            data,
            config,
        )
    },
    /**
     * 
     * @param {String} api "ingredients", "keyword", "noAdditives", "intensiveCare"
     * @param {Object} data 
     * @param {String} data.country_code
     * @param {Object} data.filter
     * @param {String} data.filter.text mostly input keyword
     */
    fetchInputData: function (api, data) {
        return axios.post(
            endpoint + API.FETCH[api],
            data,
            config,
        )
    },





    // ///////////
    // /**
    //  * fetch managers
    //  * 
    //  * @param {country_code} data 
    //  */
    // fetchManager: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.MANAGER,
    //         data,
    //         config,
    //     )
    // },
    // /**
    //  * fetch etc info
    //  * ex) 제조사 리스트, 판매업자 리스트
    //  * 
    //  * @param {country_code, type} data 
    //  * available type: "distributor", "manufacturer", "import_company", "country_of_manufacture", "price_source"
    //  */
    // fetchCosmeticEtc: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.COSMETIC_ETC,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch detail cosmetic etc info
    //  * 
    //  * @param {country_code, detail, pk, type} data 
    //  * available type: "distributor", "manufacturer", "import_company", "country_of_manufacture", "price_source"
    //  */
    // fetchCosmeticEtcDetail: function (data) {
    //     data.detail = true
    //     return axios.post(
    //         endpoint + API.FETCH.DETAIL.COSMETIC_ETC,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch category tags
    //  * 
    //  * @param {country_code} data 
    //  */
    // fetchCategoryTag: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.CATEGORY_TAG,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch the stored ingredients from the text(mostly input)
    //  * 
    //  * @param {filter, country_code} data
    //  * filter: { text }
    //  */
    // fetchIngredients: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.INGREDIENTS,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch the stored keywords from the text(mostly input)
    //  * 
    //  * @param {filter, country_code} data 
    //  * filter: { text }
    //  */
    // fetchKeywords: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.KEYWORDS,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch the stored no additive from the text(mostly input)
    //  * 
    //  * @param {filter, country_code} data 
    //  * filter: { text }
    //  */
    // fetchNoAdditives: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.NO_ADDITIVES,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch the stored intensive care from the text(mostly input)
    //  * 
    //  * @param {filter, country_code} data 
    //  * filter: { text }
    //  */
    // fetchIntensiveCare: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.INTENSIVE_CARE,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch brand list
    //  * 
    //  * @param {country_code} data 
    //  */
    // fetchBrands: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.BRANDS,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch brand info
    //  * 
    //  * @param {country_code, detail, pk} data 
    //  */
    // fetchBrandDetail: function (data) {
    //     data.detail = true
    //     return axios.post(
    //         endpoint + API.FETCH.DETAIL.BRAND,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch brand line list of the brand(filter)
    //  * 
    //  * @param {filter, country_code} data 
    //  * filter: { brand_id }
    //  */
    // fetchBrandLines: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.BRAND_LINES,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch brand line info
    //  * 
    //  * @param { country_code, detail, pk } data 
    //  */
    // fetchBrnadLineDetail: function (data) {
    //     data.detail = true
    //     data.type = "brand_line"
    //     return axios.post(
    //         endpoint + API.FETCH.DETAIL.BRAND_LINE,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch features of the Cosmetic
    //  * ex) 모든 피부, 민감성, 올인원..
    //  * 
    //  * @param {country_code} data 
    //  */
    // fetchFeatures: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.FEATURES,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * fetch cosmetic info
    //  * 
    //  * @param {pk, uploadDetail} data 
    //  */
    // fetchCosmetic: function (data) {
    //     return axios.post(
    //         endpoint + API.FETCH.COSMETIC,
    //         data,
    //         config
    //     )
    // },
    // /**
    //  * modify brand info
    //  * 
    //  * @param {model, form_data} data
    //  * form_data: { 
    //  *              id, 
    //  *              brand_image, 
    //  *              brand_name: { ko, en }
    //  *            } 
    //  */
    // modifyBrand: function (data) {
    //     return axios.post(
    //         endpoint + API.MODIFY.BRAND,
    //         data,
    //         config
    //     )
    // },
}

export default moruApi