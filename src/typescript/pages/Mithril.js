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
var MithrilPage = /** @class */ (function () {
    function MithrilPage() {
    }
    MithrilPage.prototype.view = function (vnode) {
        return m(Main_1.default, {
            class: 'app',
            sidebar: m(Sidebar_2.default, { items: Sidebar_1.Sidebar.state.sidebarItems }),
            main: m(Main_2.default, {
                title: 'Mithril'
            })
        }, [
            m('p', "A modern client-side Javascript framework for building Single Page\n        Applications. It's small (8.45 KB gzipped), fast and provides routing\n        and XHR utilities out of the box.")
        ]);
    };
    return MithrilPage;
}());
exports.default = MithrilPage;
//# sourceMappingURL=Mithril.js.map