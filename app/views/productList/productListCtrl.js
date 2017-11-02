angular.module('ecommerce').controller('productListCtrl', function($scope, productSrvc){
  // This will load up our products on the $scope
  productSrvc.getProducts().then(products=>{
    $scope.products = products;
  });
})
