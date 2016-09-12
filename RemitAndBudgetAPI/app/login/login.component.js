
   

var loginController = function (Auth, $window, $location) {
        self = this;
        var _login = function()
        {
            var loginInfo = {
                UserName: self.UserName,
                Password: self.Password
            };
            Auth.LogIn(loginInfo).then(function (args) {
                $window.alert("Login successfull");
                $location.path("/home");
            }, function (args) {
                $window.alert("Login failed!");
            });
        };         
        this.Login = _login;
    };
    var _componentReturn = {};
    _componentReturn.controller = ['Auth', '$window', '$location', loginController];
    _componentReturn.templateUrl = "app/login/login.template.html";


angular.
    module('login').
    component('login', _componentReturn);


//this.LogIn = _logIn;
//this.LogOut = _logOut;
//this.Register = _register;
//this.GetSessionData = _getSessionData;