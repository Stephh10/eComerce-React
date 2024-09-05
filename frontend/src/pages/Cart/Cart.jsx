import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartDetails = useSelector((state) => state.cart);
  const cartItems = cartDetails.cart.length;
  const finalPrice = cartDetails.cart.reduce((acc, item) => {
    return acc + item.new_price * item.quantity;
  }, 0);

  return (
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
              <CartItem key={item.id} item={item} />
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
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
}
