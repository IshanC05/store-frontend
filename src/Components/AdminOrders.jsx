import React, { useEffect, useState } from "react";
import { getAllOrdersForAdmin } from "./Service/OrderService";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";
import Spinner from "./Spinner";

function AdminOrders() {
  const [orders, setOrders] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllOrdersForAdmin()
      .then((content) => {
        setOrders(content);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="container mt-5">
      {loading && <Spinner />}
      <h6>Admin</h6>
      <hr />
      {orders && (
        <div className="row">
          <OrderList orders={orders} onClick={handleOrderClick} />
          {selectedOrder && <OrderDetails order={selectedOrder} />}
        </div>
      )}
      {!loading && !orders && <h1>No Orders to display</h1>}
    </div>
  );
}

export default AdminOrders;
