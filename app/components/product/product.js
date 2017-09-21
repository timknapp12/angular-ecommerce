// Components
angular.module('ecommerce').component('product', {
  //  Just like a view, we can specify a template url
  templateUrl:'app/components/product/product.html',
  // Components have a different way of dealing with scope
  // Instead of ijecting $scope into our controller.  We use the
  // controller itself as our scope.  This turns our controller into
  // a constructor function format. So we will access it through this
  // inside of our controller, and as pd (in this case) from our html
  // This gives us a way to name our scopes
  controllerAs:'pd',
  // Bindings are html attributes that we can use on the component to pass
  // information into the controller from html.
  // < one way data bind
  // = two way data bind
  // @ string data bind
  // & action bind
  bindings:{product:'<',
            addToCart:'='},
  controller:function(cartSrvc){
    this.add = function(){
      cartSrvc.addItem({...this.product});
    }
  }
})
