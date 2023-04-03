'use strict';
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.Router = void 0;
var auth_controller_1 = __importDefault(require('./controllers\\auth-controller'));
var user_profile_controller_1 = require('./controllers\\user-profile-controller');
var express_1 = require('express');
var society_controller_1 = require('./controllers\\society-controller');
var project_controller_1 = require('./controllers\\project-controller');
var Router = (function () {
    function Router(app) {
        this.app = app;
    }
    Router.prototype.listen = function () {
        this.createRoute('auth', auth_controller_1.default);
        this.createRoute('user-profile', user_profile_controller_1.UserProfileController);
        this.createRoute('society', society_controller_1.SocietyController);
        this.createRoute('project', project_controller_1.ProjectController);
    };
    Router.prototype.createRoute = function (path, controller, base) {
        if (path === void 0) {
            path = null;
        }
        if (base === void 0) {
            base = '/api/';
        }
        var router = (0, express_1.Router)();
        new controller().listen(router);
        if (path) {
            this.app.use(base + path, router);
        } else {
            this.app.use(base, router);
        }
    };
    Router.prototype.error = function (res) {
        res.send({ success: false });
    };
    return Router;
})();
exports.Router = Router;