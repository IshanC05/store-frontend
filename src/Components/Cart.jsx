import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import CartItem from "./CartItem";
import CartContext from "./Context/Cart/CartContext";
import { createTransaction, placeOrder } from "./Service/OrderService";
import { getLoggedInUserDetails } from "./Auth";
import { toast } from "react-toastify";
import useRazorpay from "react-razorpay";
import Spinner from "./Spinner";

function Cart() {
  const { cart, getCartDetails, loading, cartTotal, formatPrice } =
    useContext(CartContext);

  const formattedCartTotal = cartTotal
    ? formatPrice(cartTotal)
    : formatPrice(0);

  const [address, setAddress] = useState(undefined);

  const handleAddressChange = (event) => {
    event.preventDefault();
    setAddress(event.target.value);
  };

  useEffect(() => {
    getCartDetails();
    // eslint-disable-next-line
  }, []);

  const [Razorpay] = useRazorpay();
  const handlePayment = (response) => {
    const userdata = getLoggedInUserDetails();
    // console.log(response);
    const options = {
      order_id: response.orderId,
      key: response.key,
      amount: response.amount,
      currency: response.currency,
      name: "ElectroSouk",
      description: "Payment of online shopping",
      image:
        "https://cdn.pixabay.com/photo/2023/05/20/16/35/dog-8006807_1280.jpg",
      handler: (response) => {
        // console.log(response);
        handleCheckoutWithoutPayment(true);
      },
      prefill: {
        name: userdata.name,
        email: userdata.email,
        contact: userdata.phone,
      },
      notes: {
        address: "Online Shopping",
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new Razorpay(options);

    paymentObject.on("payment.failed", (response) => {
      console.log(response);
    });

    paymentObject.open();
  };

  const handleCheckoutWithPayment = async () => {
    const amount = cartTotal;
    createTransaction(amount)
      .then((order) => {
        handlePayment(order);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckoutWithoutPayment = async (isPaid = false) => {
    const orderRequest = {
      cartId: cart.cartId,
      orderAddress: address,
      paid: isPaid,
    };
    // console.log(orderRequest);
    placeOrder(orderRequest)
      .then((response) => {
        toast.success("Order placed successfully");
        getCartDetails();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Internal Server Error");
      });
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div className="container my-2 mx-auto" style={{ maxWidth: "610px" }}>
          <ListGroup>
            {cart &&
              cart.cartItem.map((cartItem, index) => (
                <ListGroupItem className="border-0" key={index}>
                  <CartItem
                    productId={cartItem.product.productId}
                    productName={cartItem.product.productName}
                    productDesc={cartItem.product.productDesc}
                    imageName={cartItem.product.imageName}
                    productPrice={cartItem.product.productPrice}
                    quantity={cartItem.quantity}
                  />
                </ListGroupItem>
              ))}
            {cart && cart.cartItem && cart.cartItem.length !== 0 && (
              <div className="my-2" style={{ maxWidth: "600px" }}>
                <ListGroupItem>
                  <span>
                    <b>Total: </b>
                    {formattedCartTotal}
                  </span>
                </ListGroupItem>
              </div>
            )}
          </ListGroup>
          {cart && cart.cartItem && cart.cartItem.length !== 0 && (
            <>
              <div>
                <Form className="my-3">
                  <Label for="address">Address</Label>
                  <b>
                    <Label style={{ color: "Red" }}>*</Label>
                  </b>
                  <Input
                    type="text"
                    id="address"
                    onChange={(event) => handleAddressChange(event)}
                    value={address || ""}
                  ></Input>
                  {address === "" && (
                    <span
                      style={{
                        color: "red",
                        marginLeft: "0px",
                        marginTop: "5px",
                        fontSize: "12px",
                      }}
                      className="text-center"
                    >
                      Address cannot be empty
                    </span>
                  )}
                </Form>
              </div>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleCheckoutWithPayment}
                  disabled={
                    address === undefined || address === null || address === ""
                  }
                >
                  Pay Now
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleCheckoutWithoutPayment}
                  disabled={
                    address === undefined || address === null || address === ""
                  }
                >
                  Pay Later
                </button>
              </div>
            </>
          )}
        </div>
      )}
      {cart && cart.cartItem && cart.cartItem.length === 0 && (
        <div className="container text-center">
          <h1>Cart is empty</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
