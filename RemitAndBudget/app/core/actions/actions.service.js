

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
  factory('YYY', [function ($resource) {


      return { Get: function () { return 'Get Test'; }}
    }
  ]);