angular.
    module('home').
    component('home', {
        templateUrl: 'app/home/home.template.html',
        controller: ['$routeParams', 'YYY','$window', function HomeController($routeParams, YYY, $window) {
            this.Test = 'Show Me!';
            this.Test2 = $routeParams.userId;
            var self = this;
            YYY.Get().then(
                function successCallback(response, $ctrl) {
                    //var description = response.data[0].Description;
                    //var amount = response.data[0].Amount;
                    //var month = response.data[0].Month;

                    self.Transactions = response.data;

            //        self.Transactions =
            //[{
            //    Action: 'Remit',
            //    Amount: '$1000.00',
            //    Month: '01-01-2017',
            //    Description: 'This is for the month of January'
            //},
            //{
            //    Action: 'Expense',
            //    Amount: '$20000.00',
            //    Month: '02-01-2017',
            //    Description: 'for milk'
            //}];


                },
                function errorCallback(response) {
                    $window.alert('error');
                }
            );

            //this.Transactions =
            //[{
            //    Action: 'Remit',
            //    Amount: '$1000.00',
            //    Date: '01-01-2017',
            //    Description: 'This is for the month of January'
            //},
            //{
            //    Action: 'Expense',
            //    Amount: '$20000.00',
            //    Date: '02-01-2017',
            //    Description: 'for milk'
            //}];
        }]
    });