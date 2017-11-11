"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var MainLayout = /** @class */ (function () {
    function MainLayout() {
    }
    MainLayout.prototype.view = function (vnode) {
        return m("div.row", vnode.attrs, [
            m('div.sidebar-wrap.col-3', [
                m('div.sidebar-content', [
                    vnode.attrs.sidebar
                ])
            ]),
            m('div.main-wrap.col-9', [
                m('div.main-content', [
                    vnode.attrs.main,
                    vnode.children
                ])
            ])
        ]);
    };
    return MainLayout;
}());
exports.default = MainLayout;
//# sourceMappingURL=Main.js.map