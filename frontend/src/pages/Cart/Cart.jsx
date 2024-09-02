import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { data_product } from "../../assets/data";

export default function Cart() {
  return (
    <div className="card">
      <div className="cartActions">
        <Link>CONTINUE SHOPPING</Link>
        <h1>Your Bag</h1>
        <Link>CHECKOUT NOW</Link>
      </div>
      <div className="cardWrapper">
        <div className="cartItems">
          {data_product.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cartDetails">
          <h3>ORDER SUMMARY</h3>
          <div className="cartDetailsEl">
            <p>Subtotal</p>
            <p>$100</p>
          </div>
          <div className="cartDetailsEl">
            <p>Estimated Shipping</p>
            <p>$5</p>
          </div>
          <div className="cartDetailsEl">
            <p>Shipping Discount</p>
            <p>-$5</p>
          </div>
          <div className="cartDetailsEl">
            <p>Total</p>
            <p>$100</p>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
}
