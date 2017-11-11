"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.oncreate = function () {
        console.log("A Sidebar was created");
    };
    SidebarComponent.prototype._sidebarList = function (items) {
        return items.map(function (item) {
            return m('li', { class: 'sidebar-item', key: item.label + "-item" }, [
                m('a', { href: "#!" + item.link }, "" + item.label)
            ]);
        });
    };
    SidebarComponent.prototype.view = function (vnode) {
        return m('div', { class: 'sidebar-content' }, [
            m('ul', { class: 'sidebar-nav' }, [
                this._sidebarList(vnode.attrs.items)
            ])
        ]);
    };
    return SidebarComponent;
}());
exports.default = SidebarComponent;
//# sourceMappingURL=Sidebar.js.map