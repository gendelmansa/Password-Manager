"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SideBarText = (function () {
    function SideBarText(text, state) {
        if (state === void 0) { state = 'inactive'; }
        this.text = text;
        this.state = state;
    }
    SideBarText.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    return SideBarText;
}());
exports.SideBarText = SideBarText;
exports.All_TEXT = [
    'Vault',
    'Account',
    'Create a new safe',
    'Logout'
].map(function (text) { return new SideBarText(text); });
//# sourceMappingURL=sidebartext.js.map