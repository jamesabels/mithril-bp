"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
// Import namespaces
var App_1 = require("../namespaces/App");
var Api_1 = require("../namespaces/Api");
var Sidebar_1 = require("../namespaces/Sidebar");
// Import Layout
var Main_1 = require("../layouts/Main");
// Import components
var Sidebar_2 = require("../components/Sidebar");
var Main_2 = require("../components/Main");
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.oncreate = function (vnode) {
        Api_1.Api.getUsers();
    };
    HomePage.prototype.view = function (vnode) {
        return m(Main_1.default, {
            class: 'app',
            sidebar: m(Sidebar_2.default, { items: Sidebar_1.Sidebar.state.sidebarItems }),
            main: m(Main_2.default, {
                title: 'Home',
                users: App_1.App.state.users
            })
        }, [
            m('p', "This is the home view of your mithril app")
        ]);
    };
    return HomePage;
}());
exports.default = HomePage;
//# sourceMappingURL=Home.js.map