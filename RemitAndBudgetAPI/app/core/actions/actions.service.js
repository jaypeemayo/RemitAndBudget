

//angular.
//  module('core.actions').
//  factory('XXX', ['$resource',
//    function ($resource) {
//        return $resource('phones/:phoneId.json', {}, {
//            query: {
//                method: 'GET',
//                params: { phoneId: 'phones' },
//                isArray: true
//            }
//        });
//    }
//  ]);


angular.
  module('core.actions').
  factory('XXX', ['$resource',
    function ($resource) {
        return $resource('/api/RemitAndBudget', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
  ])


//var req = {
//    method: 'POST',
//    url: 'http://example.com',
//    headers: {
//        'Content-Type': undefined
//    },
//    data: { test: 'test' }
//}

//$http(req).then(function(){...}, function(){...});
angular.
  module('core.actions').
  factory('YYY', ['$http', function ($http) {

       
      return {
          Get: function () {
              //return $http.get('/api/RemitAndBudget').success(function(){data}).error(function(){})
              return $http({ method: 'GET', url: '/api/TransactionInfoes' });
          },

          Post: function (actionInfo) {
              return $http.post('/api/TransactionInfoes', actionInfo);
          }

      }
  }
]);