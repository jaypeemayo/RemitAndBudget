angular.
    module('home').
    component('home', {
        templateUrl: 'app/home/home.template.html',
        controller: ['$routeParams', function HomeController($routeParams) {
            this.Test = 'Show Me!';
            this.Test2 = $routeParams.userId;
            this.Transactions =
            [{
                Action: 'Remit',
                Amount: '$1000.00',
                Date: '01-01-2017',
                Description: 'This is for the month of January'
            },
            {
                Action: 'Expense',
                Amount: '$20000.00',
                Date: '02-01-2017',
                Description: 'for milk'
            }];
        }]
    });