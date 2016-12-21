import JwtDecoder from "jwt-decode"

import * as Helper from './helper.js'

export default class API {
    constructor() {
        this.apiGateway = Helper.getConfig('apiGateway');
    }

    /**
     * Merge the params
     *
     * @param Object or Array
     * @return Object
     */
    static mergeParams() {
        var params = {};
        for (var argsKey in arguments) {
            if (!Helper.isNullOrEmpty(arguments[argsKey])) {
                if (arguments instanceof Object) {
                    for (var argKey in arguments[argsKey]) {
                        params[argKey] = arguments[argsKey][argKey];
                    }
                } else {
                    params[argKey] = arguments[argsKey];
                }
            }
        }

        return params;
    }

    static responseHandler(response) {
        if (response.status == 401) {
            window.location.href = '/login.html';
        }
    }

    static getPingInterval() {
        var interval = Helper.getConfig('pingInterval');

        return interval > 1000 ? interval : 30000;
    }

    /**
     * Store Authorization token
     */
    static persistAuthorizedToken(response) {
        sessionStorage.setItem('token', response.body.token);
    }

    /**
     * Destroy Authorization token
     */
    static destoryAuthorizedToken() {
        sessionStorage.removeItem('token');
    }

    /**
     * Get Authorization token
     */
    static getAuthorizedToken() {
        return sessionStorage.getItem("token");
    }

    /**
     * Get Authorization user
     */
    static getAuthorizedUser() {
        var token = API.getAuthorizedToken();

        try {
            return JwtDecoder(token);
        } catch (e) {
            API.responseHandler({status: 401});
        }
    }

    /**
     *
     * Generate authorized ajax object for 3rd library, like datatables
     */
    static produceAuthorizedAjaxObject(url, method, data, headers, success, error) {
        var requiredHeaders = {
            Authorization: "bearer " + API.getAuthorizedToken()
        };
        var headers = API.mergeParams(requiredHeaders, headers);

        return API.produceAjaxObject(url, method, data, headers, success, error);
    }

    /**
     *
     * Basic ajax generation method
     */
    static produceAjaxObject(url, method, data, headers, success, error) {
        var ajax = {};

        if (!Helper.isNullOrEmpty(url)) {
            ajax['url'] = url;
        }
        if (!Helper.isNullOrEmpty(method)) {
            ajax['method'] = method;
        }
        if (!Helper.isNullOrEmpty(data)) {
            ajax['data'] = data;
        }
        if (!Helper.isNullOrEmpty(headers)) {
            ajax['headers'] = headers;
        } else {
            ajax['headers'] = requiredHeaders;
        }
        if (!Helper.isNullOrEmpty(success) && success instanceof Function) {
            ajax['success'] = success;
        }
        if (!Helper.isNullOrEmpty(error) && error instanceof Function) {
            ajax['error'] = error;
        }

        return ajax;
    }
}
