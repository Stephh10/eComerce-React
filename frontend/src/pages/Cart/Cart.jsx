import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { resetCart } from "../../store/CartSlice";
import StripeCheckout from "react-stripe-checkout";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const cartDetails = useSelector((state) => state.cart);
  const cartItems = cartDetails.cart.length;
  const finalPrice = cartDetails.cart.reduce((acc, item) => {
    return acc + item.new_price * item.quantity;
  }, 0);

  async function onToken(token) {
    if (!token) return null;

    const orderDetails = {
      token,
      products: [...cart],
    };

    const response = await fetch("http://localhost:3000/createorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    });

    const resData = await response.json();
    dispatch(resetCart());
    toast.success(resData.message);
  }

  return (
    <>
      <div className="card">
        <div className="cartActions">
          <Link to={"/"}>CONTINUE SHOPPING</Link>
          <h1>Your Bag</h1>
          <Link>CHECKOUT NOW</Link>
        </div>
        <div className="cardWrapper">
          <div className="cartItems">
            {cartItems ? (
              cartDetails.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))
            ) : (
              <p className="emptyCart">Your cart is empty</p>
            )}
          </div>
          <div className="cartDetails">
            <h3>ORDER SUMMARY</h3>
            <div className="cartDetailsEl">
              <p>Subtotal</p>
              <p>${finalPrice}</p>
            </div>
            <div className="cartDetailsEl">
              <p>Estimated Shipping</p>
              <p>${!cartItems ? 0 : 10}</p>
            </div>
            <div className="cartDetailsEl">
              <p>Shipping Discount</p>
              <p>-${!cartItems ? 0 : 10}</p>
            </div>
            <div className="cartDetailsEl">
              <p>Total</p>
              <h3>${finalPrice}</h3>
            </div>
            <StripeCheckout
              token={onToken}
              stripeKey={import.meta.env.VITE_STRIPE_KEY}
              shippingAddress
              billingAddress
            >
              <button>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </>
  );
}
