angular.module('ecommerce').config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'/',
    templateUrl:'app/views/home/home.html',
    controller:'homeCtrl'
  }).state('products', {
    url:'/products',
    templateUrl:'app/views/productList/productList.html',
    controller:'productListCtrl'
  }).state('cart', {
    url:'/cart',
    component: 'cart'
  }).state('components', {
    url:'/components',
    templateUrl:'app/views/components/components.html',
    controller:'componentsCtrl'
  })

  $urlRouterProvider.otherwise('/');
})
