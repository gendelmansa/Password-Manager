"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginText = (function () {
    function LoginText(name, state, message, path) {
        if (state === void 0) { state = 'inactive'; }
        this.name = name;
        this.state = state;
        this.message = message;
        this.path = path;
    }
    LoginText.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    return LoginText;
}());
exports.LoginText = LoginText;
exports.LOGINTEXT = [
    new LoginText('Login', 'inactive', '', ''),
    new LoginText('Forgot', 'inactive', 'Forgot your password:', '/forgot'),
    new LoginText('Register', 'inactive', 'Dont have an account: ', '/register')
];
//# sourceMappingURL=logintext.js.map