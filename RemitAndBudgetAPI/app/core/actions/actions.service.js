

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
  factory('actionService', ['$http', '$q', function ($http, $q) {
      
      function composeHeader() {
          var sessionToken = sessionStorage.getItem('tokenKey');
          return {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + sessionToken
          };
      }
       
      return {


          Get: function () {
              return $http({
                  method: 'GET',
                  url: '/api/TransactionInfoes',
                  headers: composeHeader()
              }).then(function (response) {
                  return response.data;
              });
          },

          Post: function (actionInfo) {
              return $http({
                  method: 'POST',
                  url: '/api/TransactionInfoes',
                  data: actionInfo,
                  headers: composeHeader()
              });
              //return $http.post('/api/TransactionInfoes', actionInfo, header);
          }
      }
  }
]);