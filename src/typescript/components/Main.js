"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
// Model
var state = {
    title: null,
};
// View
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.oncreate = function (vnode) {
        state.title = vnode.attrs.title;
    };
    Main.prototype._renderUsers = function (users) {
        return users.map(function (user) {
            return (m('user-wrap', [
                m('h1', "" + user.username),
                m('p', "" + user.name)
            ]));
        });
    };
    Main.prototype.view = function (vnode) {
        return [
            m('h1', vnode.attrs.title),
            this._renderUsers(vnode.attrs.users)
        ];
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=Main.js.map