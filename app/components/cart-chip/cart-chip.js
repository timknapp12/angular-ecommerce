angular.module('ecommerce').component('cartChip', {
    template:'{{cp.getItems()}}',
    controller:function(cartSrvc){
        this.getItems = cartSrvc.getNumberItems
    },
    controllerAs:'cp'
})