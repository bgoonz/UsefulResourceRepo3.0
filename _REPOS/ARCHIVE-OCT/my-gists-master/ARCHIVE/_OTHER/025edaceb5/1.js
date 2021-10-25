// my original:

function getOrderDetails(orderID) {
  return db.find("orders", orderID).then(order => {
    return db.find("customers", order.customerID).then(customer => {
      order.customer = customer;
      return order;
    });
  });
}
