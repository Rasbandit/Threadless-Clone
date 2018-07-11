angular.module("myapp").controller('productCtrl', function($scope, productService, $stateParams) {

   $scope.product_id = $stateParams.id - 1;

   $scope.selected = '';

   $scope.show = "nope";

   $scope.product = $scope.allProducts[$scope.product_id];

   $scope.product_men = productService.getMenImages($scope.allProducts, $scope.product_id);
   $scope.product_women = productService.getWomenImages($scope.allProducts, $scope.product_id);
   $scope.purchaseable = [];

   if ($stateParams.gender === 'female') {
      $scope.images = $scope.product_women;
      $scope.purchaseable = $scope.product_women.slice(1);
      $scope.purchaseable[0].show = true;
   }
   else {
      $scope.images = $scope.product_men;
      $scope.purchaseable = $scope.product_men.slice(1);
      $scope.purchaseable[0].show = true;
   }
   $scope.main_image = $scope.images[1].img;

   $scope.focus = $stateParams.gender;

   $scope.female = 'genders-box-active';


   $scope.changeMale = function() {
      $scope.images = $scope.product_men;
      $scope.main_image = $scope.images[1].img;
      $scope.purchaseable = $scope.product_men.slice(1);
      $scope.focus = "male";
   }
   $scope.changeFemale = function() {
      $scope.images = $scope.product_women;
      $scope.main_image = $scope.images[1].img;
      $scope.purchaseable = $scope.product_women.slice(1);
      $scope.focus = "female";
   }
   $scope.updateMain = function(newImg) {
      $scope.main_image = newImg;
      for (var i = 0; i < $scope.purchaseable.length; i++) {
        if($scope.purchaseable[i].img === newImg) {
          $scope.purchaseable[i].show = true;
        }
        else {
          $scope.purchaseable[i].show = false;
        }
      }
   }

   $scope.showthing = function() {
      $scope.show = "yup";
   }

   $scope.addToCartLocal = function(item) {
    var holder = item;
    $scope.addToCart(holder);
   }

});
