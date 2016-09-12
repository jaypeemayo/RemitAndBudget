angular.module('core.authenticationService').
    factory('Auth', ['$http','$q',
    function ($http, $q) {
        var _authService = {};

        var _logIn = function (loginInfo) {
            var def = $q.defer();
            var data = "grant_type=password&username=" + loginInfo.UserName + "&password=" + loginInfo.Password;
            
            return $http.post('/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function(args) {
                sessionStorage.setItem('tokenKey', args.data.access_token);
                //sessionStorage.setItem('userNameKey', args.data.userName);
                //sessionStorage.setItem('refreshTokenKey', args.data.refresh_token);

                def.resolve(args);
            }, function (args) {
                def.reject(args);
                _logOut();
            });
            return def.promise;
        };
     
        var _logOut = function () {
            sessionStorage.removeItem('tokenKey');
        };


        var _register = function (registrationInfo) {
            return $http.Post('/Register', registrationInfo);

        };

        var _getSessionData = function () {
           
        };


        _authService.LogIn = _logIn;
        _authService.LogOut = _logOut;
        _authService.Register = _register;
        _authService.GetSessionData = _getSessionData;
        return _authService;

    }]);