"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
// Import namespaces
var Sidebar_1 = require("../namespaces/Sidebar");
// Import Layout
var Main_1 = require("../layouts/Main");
// Import components
var Sidebar_2 = require("../components/Sidebar");
var Main_2 = require("../components/Main");
var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage.prototype.view = function (vnode) {
        return m(Main_1.default, {
            class: 'app',
            sidebar: m(Sidebar_2.default, { items: Sidebar_1.Sidebar.state.sidebarItems }),
            main: m(Main_2.default, {
                title: 'About'
            })
        }, [
            m('p', "This is the about view of your mithril app")
        ]);
    };
    return AboutPage;
}());
exports.default = AboutPage;
//# sourceMappingURL=About.js.map