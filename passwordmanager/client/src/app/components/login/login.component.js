"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var logintext_1 = require("./logintext");
var LoginComponent = (function () {
    function LoginComponent() {
        this.logintext = logintext_1.LOGINTEXT;
        this.state = 'inactive';
        this.newprofile = false;
        console.log(this.logintext);
        console.log(this.logintext);
    }
    LoginComponent.prototype.toggleState = function () {
        var _this = this;
        this.state = (this.state === 'active' ? 'inactive' : 'active');
        setTimeout(function () { _this.state = (_this.state === 'active' ? 'inactive' : 'inactive'); }, 50);
    };
    LoginComponent.prototype.toggleRegister = function () {
        this.newprofile = !this.newprofile;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        animations: [
            animations_1.trigger('btnClick', [
                animations_1.state('inactive', animations_1.style({
                    backgroundColor: '#698095',
                    transform: 'scale(1)'
                })),
                animations_1.state('active', animations_1.style({
                    backgroundColor: '#698095',
                    border: '3px #697993 inset',
                    transform: 'scale(1)'
                })),
                animations_1.transition('active => inactive', animations_1.animate('100ms ease-out'))
            ])
        ],
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.component.html',
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map