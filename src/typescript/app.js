"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
// Import Pages
var Home_1 = require("./pages/Home");
var About_1 = require("./pages/About");
var Mithril_1 = require("./pages/Mithril");
m.route(document.body, '/', {
    '/': Home_1.default,
    '/about': About_1.default,
    '/mithril': Mithril_1.default
});
//# sourceMappingURL=app.js.map