angular.module('myapp').service('mainService', function($http) {

  this.getProducts = function() {
     return $http({
        method: 'GET',
        url: "/api/products"
     }).then(function(response) {
       console.log(response.data);
       return response.data
     })
  }
})
