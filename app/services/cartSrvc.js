angular.module('ecommerce').service('cartSrvc', function(){
  let cart = [];

  this.addItem = function(newItem){
    cart.push({
      amount:1,
      product:newItem
    })
  }

  this.getTotal = function(){
    return cart.reduce((total, lineItem)=>{
      return total + lineItem.amount * lineItem.product.price
    }, 0)
  }

  this.getCart = function(){
    return cart;
  }

  this.getNumberItems = function(){
    return cart.reduce((total, lineItem)=>{
      return total + lineItem.amount
    }, 0)
  }

  this.removeItem = function(item){
    let index = cart.indexOf(item);
    if (index!==-1){
      cart.splice(index, 1);
    }
  }

})
