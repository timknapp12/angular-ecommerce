angular.module('ecommerce').component('product', {
    templateUrl: 'app/components/product/product.html',
    controller: function(cartSrvc) {
        this.addToCart = cartSrvc.addItem;
    },
    controllerAs: 'pd',
    bindings: {
        product: '<', //one-way binding
                        // = two-way data bind
        buttonLabel: '@', // @ string binding- what yo put as attribute tag stays as a string
        buttonAction: '&'   // & action binding 
    }
})