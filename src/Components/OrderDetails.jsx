import React, { useContext } from "react";
import CartContext from "./Context/Cart/CartContext";

const OrderDetails = ({ order }) => {
  const { formatPrice } = useContext(CartContext);

  const formattedTotalPrice = order
    ? formatPrice(order.orderAmt)
    : formatPrice(0);

  const dateFormatter = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const ans = dateObject.toLocaleDateString("en-US", options);
    return ans;
  };

  const formattedDate = order ? dateFormatter(order.orderCreatedAt) : 0;

  return (
    <div className="col-lg-6">
      <div className="order-details">
        <h1>Summary</h1>
        <div className="card">
          <div className="card-body">
            <ul className="list-group">
              {order.orderItem.map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={index}
                >
                  {item.product.productName}
                  <span className="badge bg-secondary">
                    {item.productQuantity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-footer">
            <p className="mb-0">Total: {formattedTotalPrice}</p>
          </div>
        </div>
        <div className="order-info mt-3">
          <p>
            <strong>Order Date:</strong> {formattedDate}
          </p>
          <p>
            <strong>Shipping Address:</strong> {order.billingAddress}
          </p>
          {/* {order.paymentStatus && order.paymentStatus === "PAID" && <p>
                        <strong>Payment Method:</strong> {order.paymentMethod}
                    </p>} */}
          <p>
            <strong>Order Status:</strong> {order.orderStatus}
          </p>
          <p>
            <strong>Payment Status:</strong> {order.paymentStatus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
