angular.module("myapp").controller('catalogCtrl', function($scope, $stateParams, catalogService, mainService) {

  $scope.guygal = $stateParams.type;
  $scope.products = [];

  $scope.getProducts = function() {
   $scope.products = catalogService.getshirts($scope.allProducts);
  }

  // $scope.checker = function () {
  //   if($scope.allProducts != null) {
  //     $scope.getProducts();
  //     clearInterval($scope.t);
  //   }
  // }
  //
  // $scope.t = setInterval($scope.checker, 500);
$scope.getProducts();


});
