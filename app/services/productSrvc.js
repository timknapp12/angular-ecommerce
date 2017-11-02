angular.module('ecommerce').service('productSrvc', function($q){

  this.getProducts = function(){
    // $q is the promise library that angular is using.  Angular existed before
    // ES6 promises were built into javascript.

    // .when is going to convert static data into a promise.  It will resolve
    // instantly, so is a great way to serve up dummy data in the same structure
    // that it will be coming back from an $http call later.
    return $q.when([
      {name:'Shoes',
      imageUrl:'https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Boat_Shoes._V530666624_.jpg',
      description:'These stylish shoes are great for throwing at people.  Holding pencils.  Also could be worn on feet.',
      price:40.25
      },{
      name:'socks',
      imageUrl:'https://www.divvyupsocks.com/wp-content/uploads/blue800.png',
      description:'Super awesome socks with puppies on them.',
      price:9.99
      },{name:'Shirt',
      imageUrl:'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Zine-2nd-Inning-Heather-Grey-%26-Marled-Red-Baseball-Shirt-_225749-front.jpg',
      description:'Take me out to the ball game.',
      price:10.00
      },{name:'Space Fruit',
      imageUrl:'https://ctl.s6img.com/society6/img/TtK7KWlA4hPvW98_g3IMjwK5vXc/h_550,w_550/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF/s6-0025/a/11385279_14899658/~~/lunar-fruit-tshirts.jpg',
      description:'The best sliced space sliced fruit around.',
      price:7.50
      },{name:'Polo',
      imageUrl:'http://nba.frgimages.com/FFImage/thumb.aspx?i=/productImages/_2654000/ff_2654848a_full.jpg&w=340',
      description:'Marco....',
      price:12.00
      }
    ])
  }

  this.getDailyDeals = function(){
    return $q.when([{name:'Shirt',
    imageUrl:'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Zine-2nd-Inning-Heather-Grey-%26-Marled-Red-Baseball-Shirt-_225749-front.jpg',
    description:'Take me out to the ball game.',
    price:10.00
    },{name:'Space Fruit',
    imageUrl:'https://ctl.s6img.com/society6/img/TtK7KWlA4hPvW98_g3IMjwK5vXc/h_550,w_550/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF/s6-0025/a/11385279_14899658/~~/lunar-fruit-tshirts.jpg',
    description:'The best sliced space sliced fruit around.',
    price:7.50
    },{name:'Polo',
    imageUrl:'http://nba.frgimages.com/FFImage/thumb.aspx?i=/productImages/_2654000/ff_2654848a_full.jpg&w=340',
    description:'Marco....',
    price:12.00
    }])
  }


})
