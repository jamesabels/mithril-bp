"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var Http_1 = require("./modules/Http");
var Api;
(function (Api) {
    function getUsers() {
        Http_1.Http.getRequest("/users/")
            .catch(function (error) {
            console.log('There was an error', error);
        })
            .then(function (result) {
            App_1.App.setState('users', result);
        });
    }
    Api.getUsers = getUsers;
    function getUserById(id) {
        Http_1.Http.getRequest("/users/" + id)
            .then(function (result) {
            console.log('List of users', result);
        });
    }
    Api.getUserById = getUserById;
})(Api = exports.Api || (exports.Api = {}));
//# sourceMappingURL=Api.js.map