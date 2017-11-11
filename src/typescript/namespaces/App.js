"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App;
(function (App) {
    App.state = {
        mode: 'view',
        users: null
    };
    function setState(stateKey, value) {
        App.state[stateKey] = value;
    }
    App.setState = setState;
})(App = exports.App || (exports.App = {}));
//# sourceMappingURL=App.js.map