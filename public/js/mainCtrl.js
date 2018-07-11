angular.module("myapp").controller('mainCtrl', function($scope, mainService) {
  $scope.allProducts = [];
  $scope.cart = [];
  mainService.getProducts().then(function(response) {
    $scope.allProducts = response;
  })

  $scope.addToCart = function(art, img, size, type, price) {
    for (var i = 0; i < $scope.cart.length; i++) {
      if($scope.cart[i].img === art && $scope.cart[i].size === size && $scope.cart[i].type === type) {
        $scope.cart[i].quantity++
        console.log($scope.cart);
        return
      }
    }

    switch(type) {
      case 'mens tee':
        price = $scope.allProducts.men_t_price;
        break;
      case 'mens v-neck':
        price = $scope.allProducts.men_v_price;
        break;
      case 'mens tank':
        price = $scope.allProducts.men_j_price;
        break;
      case 'mens hoodie':
        price = $scope.allProducts.men_h_price;
        break;
      case 'mens long sleeve':
        price = $scope.allProducts.men_ls_price;
        break;
      case 'womens tee':
        price = $scope.allProducts.women_t_price;
        break;
      case 'womens dolman':
        price = $scope.allProducts.women_d_price;
        break;
      case 'womens tank':
        price = $scope.allProducts.women_j_price;
        break;
      case 'womens hoodie':
        price = $scope.allProducts.women_h_price;
        break;
      case 'womens long Sleeve':
        price = $scope.allProducts.women_ls_price;
        break;
      case 'womens v-Neck':
        price = $scope.allProducts.women_v_price;
        break;
    }

    for (var i = 0; i < $scope.allProducts.length; i++) {
      if(art === $scope.allProducts[i].art) {
        var obj = {
          img: $scope.allProducts[i].art,
          name: $scope.allProducts[i].name,
          type: type,
          price: price,
          quantity: 1,
          size: size
        }
        $scope.cart.push(obj);
        console.log($scope.cart);
      }
    }
  }
});
