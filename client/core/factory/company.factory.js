(function () {

  'use strict';


var typeAhead = angular.module('app', []);

typeAhead.factory('dataFactory', function($http) {
  return {
    get: function(url) {
      return $http.get(url).then(function(resp) {
        return resp.data; // success callback returns this
      });
    }
  };
});


}());