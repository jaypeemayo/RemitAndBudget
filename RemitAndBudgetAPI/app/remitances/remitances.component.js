angular.
    module('remitances').
    component('remitances', {
        templateUrl: 'app/remitances/remitances.template.html',
        controller: ['$routeParams', '$window', 'XXX', 'actionService', function RemitancesController($routeParams, $window, XXX, actionService) {

            this.RemitancesId = $routeParams.remitancesId;
            this.GetRemitance = function () {
              
                this.Amount;
                this.Month;
                this.Description;
                var testReturn = actionService.Get().
                then(
                function successCallback(response) {
                    $window.alert(response.data[0] + response.data[1]);
                },
                function errorCallback(response) {
                    $window.alert(response.statusText);
                });
            }

            this.AddTransaction = function () {
                var transactionInfo = {
                    'Amount': this.Amount,
                    'Month': this.Month,
                    'Description': this.Description,
                    'Action': this.Action,
                    'UserInfoId': 1
                }
                var testReturn = actionService.Post(transactionInfo).
                then(
                function (response) {
                    $window.alert("New transaction has successfully added.");
                },
                function (response) {
                    $window.alert(response.statusText);
                    $location.path('/login');
                });
            }
        }]
    });