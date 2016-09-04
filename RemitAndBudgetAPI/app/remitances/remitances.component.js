angular.
    module('remitances').
    component('remitances', {
        templateUrl: 'app/remitances/remitances.template.html',
        controller: ['$routeParams', '$window', 'XXX', 'YYY', function RemitancesController($routeParams, $window, XXX, YYY) {

            this.RemitancesId = $routeParams.remitancesId;
            this.GetRemitance = function () {
              
                this.Amount;
                this.Month;
                this.Description;
                var testReturn = YYY.Get().
                then(
                function successCallback(response) {
                    $window.alert(response.data[0] + response.data[1]);
                },
                function errorCallback(response) {
                    $window.alert('error');
                });
              

            }

            this.AddTransaction = function () {

               

                var transactionInfo = {
                    'Amount': this.Amount,
                    'Month': this.Month,
                    'Description': this.Description
                }
                var testReturn = YYY.Post(transactionInfo).
                then(
                function successCallback(response) {
                    $window.alert(response.data[0] + response.data[1]);
                },
                function errorCallback(response) {
                    $window.alert('error');
                });


            }
        }]
    });