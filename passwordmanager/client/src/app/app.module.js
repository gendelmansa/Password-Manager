"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/login/login.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var register_component_1 = require("./components/register/register.component");
var home_component_1 = require("./components/home/home.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var forgot_component_1 = require("./components/forgot/forgot.component");
var appRoutes = [
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'forgot', component: forgot_component_1.ForgotComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: home_component_1.HomeComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            navbar_component_1.NavbarComponent,
            register_component_1.RegisterComponent,
            home_component_1.HomeComponent,
            sidebar_component_1.SidebarComponent,
            forgot_component_1.ForgotComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map