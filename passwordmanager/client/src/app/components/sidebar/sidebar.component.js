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
var sidebartext_1 = require("./sidebartext");
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.sidetext = sidebartext_1.All_TEXT;
        console.log(this.sidetext);
    }
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sidebar',
        templateUrl: './sidebar.component.html',
        animations: [
            animations_1.trigger('hover', [
                animations_1.state('inactive', animations_1.style({
                    transform: 'scale(1)',
                })),
                animations_1.state('active', animations_1.style({
                    transform: 'scale(1.2)',
                })),
                animations_1.transition('inactive => active', animations_1.animate('100ms ease-in')),
                animations_1.transition('active => inactive', animations_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map