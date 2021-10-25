// mine with arrow functions

function getOrderDetails(orderID) {
  return db.find( "orders", orderID )
    .then(order =>
      db.find( "customers", order.customerID )
        .then(customer => {
          order.customer = customer;
          return order;
        });
    );
}