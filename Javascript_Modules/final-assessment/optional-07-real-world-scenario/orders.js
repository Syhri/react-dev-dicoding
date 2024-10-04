// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const customerID = generateUniqueId();
  const totalPrice = items
    .map((itemPrice) => itemPrice.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const OrderObj = {
    id: customerID,
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: "Menunggu",
  };

  orders.push(OrderObj);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const id = orders.find((order) => order.id === orderId);
  if (id) {
    id.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
