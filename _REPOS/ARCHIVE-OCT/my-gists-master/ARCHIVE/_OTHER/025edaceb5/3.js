// yours

function getOrderDetails(orderID) {
  return db
    .find("orders", orderID)
    .then((order) =>
      db
        .find("customers", order.customerID)
        .then((customer) => ({ order, customer }))
    )
    .then(({ order, customer }) => Object.assign(order, { customer }));
}
