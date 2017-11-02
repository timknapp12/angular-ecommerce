angular.module('ecommerce').controller('homeCtrl', function($scope, productSrvc){
  // This will load up our dailyDealts on the $scope
  productSrvc.getDailyDeals().then(products=>{
    $scope.products = products;
  });
})
