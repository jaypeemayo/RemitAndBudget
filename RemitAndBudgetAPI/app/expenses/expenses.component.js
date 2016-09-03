angular.module('expenses').
    component('expenses', {
    	templateUrl: 'app/expenses/expenses.template.html',
    	controller: ['$routeParams', function ExpensesController($routeParams) {
    		this.ExpensesId = $routeParams.expensesId;

    	}]
    });