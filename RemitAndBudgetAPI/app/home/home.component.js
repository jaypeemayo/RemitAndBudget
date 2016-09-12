angular.
    module('home').
    component('home', {
        templateUrl: 'app/home/home.template.html',
        controller: ['$routeParams', 'actionService', '$window', '$location', function HomeController($routeParams, actionService, $window, $location) {
            this.Test = 'Show Me!';
            this.Test2 = $routeParams.userId;
            var self = this;
            actionService.Get().then(
                function (response) {
                    self.Transactions = response;
                },
                function (response) {
                    $window.alert(response.statusText);
                    $location.path('/login');
                }
            );
        }]
    });