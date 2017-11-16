angular.module('ecommerce').component('cart', {
    templateUrl:'app/components/cart/cart.html',
    controller:function(cartSrvc){
        this.cart = cartSrvc.getCart();

        this.getTotal = cartSrvc.getTotal;

        this.removeItem = function(item){
            cartSrvc.removeItem(item);
        }
    },
    controllerAs:'ct'
})