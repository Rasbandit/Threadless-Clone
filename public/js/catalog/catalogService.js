angular.module("myapp").service('catalogService', function($http, $stateParams) {

  this.getProducts = function() {
     return $http({
        method: 'GET',
        url: "/api/products"
     }).then(function(response) {
       console.log(response);
       return response.data
     })
  }

this.getshirts = function(allProducts) {
   var products = [];
   var view = $stateParams.view;
   var type = $stateParams.type;
   var order = $stateParams.order;
   var style = $stateParams.style;
   var display = $stateParams.display;
   var page = $stateParams.page;
   var color = $stateParams.color;
   if (type === "guys") {
      if (style === "tees") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_t != null) {
                  products.push({
                  gender: "male",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].men_t_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_t != null) {
                  products.push({
                  gender: "male",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].men_t,
                  price: allProducts[i].men_t_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if (style === "v-neck") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_v != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].art,
                        price: allProducts[i].men_v_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_v != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].men_v,
                        price: allProducts[i].men_v_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if (style === "jersey") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_j != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].art,
                        price: allProducts[i].men_j_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_j != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].men_j,
                        price: allProducts[i].men_j_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if (style === "longSleeve") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_ls != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].art,
                        price: allProducts[i].men_ls_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_ls != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].men_ls,
                        price: allProducts[i].men_ls_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
      }
      else if (style === "hoodie") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_h != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].art,
                        price: allProducts[i].men_ls_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].men_h != null) {
                  products.push(
                     {
                        gender: "male",
                        id: allProducts[i].shirt_id,
                        img: allProducts[i].men_h,
                        price: allProducts[i].men_h_price,
                        name: allProducts[i].name,
                        artist: allProducts[i].artist,
                        color: allProducts[i].color
                  })
               }
            }
         }
      }
   }
   else if (type === "gals") {
      if (style === "dol") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_d != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_d_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_d != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_d,
                  price: allProducts[i].woman_d_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      if (style === "tees") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_t != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_t_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_t != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_t,
                  price: allProducts[i].woman_t_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      if (style === "jersey") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_j != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_j_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_j != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_j,
                  price: allProducts[i].woman_j_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      if (style === "longSleeve") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_ls != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_ls_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_ls != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_ls,
                  price: allProducts[i].woman_j_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
      if (style === "v-neck") {
         if (display === "art") {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_v != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].art,
                  price: allProducts[i].woman_v_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
         else {
            for (var i = 0; i < allProducts.length; i++) {
               if (allProducts[i].woman_v != null) {
                  products.push({
                     gender: "female",
                  id: allProducts[i].shirt_id,
                  img: allProducts[i].woman_v,
                  price: allProducts[i].woman_v_price,
                  name: allProducts[i].name,
                  artist: allProducts[i].artist,
                  color: allProducts[i].color
                  })
               }
            }
         }
      }
   }
   if (color === "") {
      return products;
   }
   else {
      for (var i = 0; i < products.length; i++) {
         if (products[i].color != color) {
            products.splice(i, 1);
            i--;
         }
      }
      return products;
   }
}
});
