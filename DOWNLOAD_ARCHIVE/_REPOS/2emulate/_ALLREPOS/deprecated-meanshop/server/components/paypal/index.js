var paypal = require('paypal-rest-sdk');
var config = require('../../config/environment');

// Endpoint environment and Authorization
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': process.env.PAYPAL_ID,
  'client_secret': process.env.PAYPAL_SECRET
});

function generatePaymentObject(cart){
  var items = cart.items.map(function(item){
    return {
      "quantity": item.quantity,
      "name": item.name,
      "price": item.price,
      "currency": "USD",
      "sku": item.id,
      "description": item.description || ""
    }
  });

  return {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "transactions": [{
      "item_list": {
        "items": items
      },
      "amount": {
        "currency": "USD",
        "total": cart.totalCost,
        "details": {
          "subtotal": cart.subTotal,
          "shipping": cart.shipping || "0.00",
          "tax": cart.tax || "0.00"
        }
      },
      "description": "Meanshop shopping cart checkout"
    }],
    "redirect_urls": {
      "return_url": "http://localhost:9000/ipn?action=success",
      "cancel_url": "http://localhost:9000/ipn?action=cancel"
    }
  };
}

exports.createPayment = function(cart, callback){
  var paymentDetails = generatePaymentObject(cart);
  return paypal.payment.create(paymentDetails, function(error, payment){
    callback(error, payment);
  });
};

exports.verifyPayment = paypal.payment.get;
