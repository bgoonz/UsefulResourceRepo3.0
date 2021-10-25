// yours without the unnecessary extra then

function getOrderDetails(orderID) {
  return db
    .find("orders", orderID)
    .then((order) =>
      db
        .find("customers", order.customerID)
        .then((customer) => Object.assign(order, { customer }))
    );
}
