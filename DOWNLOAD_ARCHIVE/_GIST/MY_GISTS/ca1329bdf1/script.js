var bigSpender = $(".big-spender");
var cartItems = $(".cart__items .total");
var cartItemsTotal = 0;
var cartPrice = $(".cart__price .total");
var cartPriceTotal = cartPrice.text();
var price;

$("button").on("click", function () {
  // Toggle purchased class
  $(this).parent().toggleClass("is-purchased");
  // Get price of this product
  price = $(this).val();
  // Toggle button text and add/subtract from cart total
  if ($(this).parent().hasClass("is-purchased")) {
    $(this).text("Remove This Product");
    // Add price/item to the cart totals
    cartPriceTotal = parseFloat(cartPriceTotal) + parseFloat(price);
    cartItemsTotal++;
  } else {
    $(this).text("Add This Product");
    // Subtract price/item from the cart totals
    cartPriceTotal = parseFloat(cartPriceTotal) - parseFloat(price);
    cartItemsTotal--;
  }
  // Update cart totals
  cartPrice.text(Math.abs(cartPriceTotal).toFixed(2));
  cartItems.text(cartItemsTotal);
  // For that big spender
  if (cartItemsTotal == 8) {
    bigSpender.addClass("is-visible");
  }
  $(".close").on("click", function (e) {
    e.preventDefault();
    bigSpender.removeClass("is-visible");
  });
});
