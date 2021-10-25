function addCalculateDiscountPriceMethod(storeItem) {
  storeItem['calculateDiscountPrice'] = function() {
    return this.price - (this.price * this.discountPercentage);
  };
  //add a method to the storeItem object called 'calculateDiscountPrice'
  //this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  //the method then subtracts the discount from the price and returns the discounted price
  //example: 
  //price -> 20
  //discountPercentage -> .2
  //discountPrice = 20 - (20 * .2)
}