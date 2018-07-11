angular.module("myapp").service('productService', function($http) {


   this.getMenImages = function(allProducts, id) {
      var men_images = [];
      men_images.push(
                  {
                     img: allProducts[id].art,
                     price: allProducts[id].men_t_price
                  });
      if(allProducts[id].men_t !== null) {
         men_images.push(
            {
               art: allProducts[id].art,
               img: allProducts[id].men_t,
               price: allProducts[id].men_t_price,
               type: "mens tee",
               show: false
            });
      }
      if (allProducts[id].men_v !== null) {
         men_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].men_v,
                        price: allProducts[id].men_v_price,
                        type: "mens v-Neck",
                        show: false
                     });
      }
      if (allProducts[id].men_j !== null) {
         men_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].men_j,
                        price: allProducts[id].men_j_price,
                        type: "mens tank",
                        show: false
                     });
      }
      if (allProducts[id].men_h !== null) {
         men_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].men_h,
                        price: allProducts[id].men_h_price,
                        type: "mens hoodie",
                        show: false
                     });
      }
      if (allProducts[id].men_ls !== null) {
         men_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].men_ls,
                        price: allProducts[id].men_ls_price,
                        type: "mens long sleeve",
                        show: false
                     });
      }
      return men_images;
   };
   this.getWomenImages = function(allProducts, id) {
      var woman_images = [];
      woman_images.push(
                     {
                        img: allProducts[id].art,
                        price: allProducts[id].woman_t_price,
                        type: "womens tee",
                        show: false
                     });
      if(allProducts[id].woman_d !== null) {
         woman_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].woman_d,
                        price: allProducts[id].woman_d_price,
                        type: "womens dolman",
                        show: false
                     });
      }
      if (allProducts[id].woman_t !== null) {
         woman_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].woman_t,
                        price: allProducts[id].men_t_price,
                        type: "womens tee",
                        show: false
                     });
      }
      if (allProducts[id].woman_j !== null) {
         woman_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].woman_j,
                        price: allProducts[id].men_j_price,
                        type: "womens tank",
                        show: false
                     });
      }
      if (allProducts[id].woman_h !== null) {
         woman_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].woman_h,
                        price: allProducts[id].men_h_price,
                        type: "womens hoodie",
                        show: false
                     });
      }
      if (allProducts[id].woman_ls !== null) {
         woman_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].woman_ls,
                        price: allProducts[id].men_ls_price,
                        type: "womens long Sleeve",
                        show: false
                     });
      }
      if (allProducts[id].woman_v !== null) {
         woman_images.push(
                     {
                       art: allProducts[id].art,
                        img: allProducts[id].woman_v,
                        price: allProducts[id].men_v_price,
                        type: "womens v-Neck",
                        show: false
                     });
      }
      return woman_images;
   };
});
