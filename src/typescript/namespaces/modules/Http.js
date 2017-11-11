"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var Http;
(function (Http) {
    var state = {
        baseUrl: 'https://jsonplaceholder.typicode.com',
        apiKey: null
    };
    function getRequest(url) {
        return m.request({
            method: 'GET',
            headers: {},
            url: "" + state.baseUrl + url
        });
    }
    Http.getRequest = getRequest;
    function postRequest(url, data) {
        return m.request({
            method: 'POST',
            headers: {},
            url: "" + state.baseUrl + url,
            data: data
        });
    }
    Http.postRequest = postRequest;
    function putRequest(url, data) {
        return m.request({
            method: 'PUT',
            headers: {},
            url: "" + state.baseUrl + url,
            data: data
        });
    }
    Http.putRequest = putRequest;
    function deleteRequest(url) {
        return m.request({
            method: 'DELETE',
            headers: {},
            url: "" + state.baseUrl + url
        });
    }
    Http.deleteRequest = deleteRequest;
})(Http = exports.Http || (exports.Http = {}));
//# sourceMappingURL=Http.js.map