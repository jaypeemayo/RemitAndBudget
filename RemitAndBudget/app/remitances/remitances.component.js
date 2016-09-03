angular.
    module('remitances').
    component('remitances', {
        templateUrl: 'app/remitances/remitances.template.html',
        controller: ['$routeParams', '$window', 'XXX', 'YYY', function RemitancesController($routeParams, $window, XXX, YYY) {

            this.RemitancesId = $routeParams.remitancesId;
            this.AddRemitance = function () {
              
                this.Amount;
                this.Month;
                this.Description;

                $window.alert(this.Amount + this.Month + this.Description + YYY.Get());

            }
        }]
    });