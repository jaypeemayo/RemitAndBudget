'use strict'

angular.module('remitAndBudgetApp').
config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
          when('/home', {
              template: '<home></home>'
          }).
          when('/home/:userId', {
              template: '<home></home>'
          }).
          when('/remitances/:remitancesId', {
              template: '<remitances></remitances>'
          }).
          when('/expenses/:expensesId', {
              template: '<expenses></expenses>'
          }).
          otherwise('/home', {
              template: '<home></home>'
          });
  }
]);


