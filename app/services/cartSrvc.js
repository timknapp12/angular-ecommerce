angular.module('ecommerce').service('cartSrvc', function(){
  let cart = [{
        amount:1,
        product:{name:'Space Fruit',
        imageUrl:'https://ctl.s6img.com/society6/img/TtK7KWlA4hPvW98_g3IMjwK5vXc/h_550,w_550/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF/s6-0025/a/11385279_14899658/~~/lunar-fruit-tshirts.jpg',
        description:'These stylish shoes are great for throwing at people.  Holding pencils.  Also could be worn on feet.',
        price:30
      }}
  ];

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

  this.removeItem = function(item) {
    console.log(item)
    for (var i = cart.length - 1; i >= 0; i--) {
      if (cart[i].product.name === item.name) {
        cart.splice(i, 1);
      }
    }
  }

  this.getNumberItems = function(){
    return cart.reduce((total, lineItem)=>{
      return total + lineItem.amount
    }, 0)
  }

})//  
