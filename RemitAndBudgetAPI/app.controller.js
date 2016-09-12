angular.module('remitAndBudgetApp').
    controller('remitAndBudgetAppController', ['Auth', '$window', '$location', function (Auth, $window, $location) {
        this.test1 = "Waaa";
        this.Logout = function () {
            Auth.LogOut();
            $window.alert('successfully logged out.');
            $location.path('/Login');

        }
    }]);