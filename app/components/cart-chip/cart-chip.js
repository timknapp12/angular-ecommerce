angular.module('ecommerce').component('cartChip', {
    template: '{{cp.items()}}',
    controller: function(cartSrvc) {
        this.items = cartSrvc.getNumberItems;
    },
    controllerAs: 'cp'
})