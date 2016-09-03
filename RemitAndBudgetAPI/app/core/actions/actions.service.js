

angular.
  module('core.actions').
  factory('XXX', ['$resource',
    function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: { phoneId: 'phones' },
                isArray: true
            }
        });
    }
  ]);

angular.
  module('core.actions').
  factory('YYY', ['$http', function ($http) {


      return {
          Get: function () {
              //return $http.get('/api/RemitAndBudget').success(function(){data}).error(function(){})
              return $http({ method: 'GET', url: '/api/RemitAndBudget' }).
              then(
                function successCallback(response) {

                },
                function errorCallback(response) {

                }
              );

          }
      }
    }
  ]);