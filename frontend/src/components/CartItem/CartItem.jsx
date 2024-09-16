import React from "react";
import "./CartItem.css";
import { addCartItem, removeCartItem } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const itemPrice = item.new_price * item.quantity;

  return (
    <div className="cartItem">
      <img src={item.image} alt="itemImage" />
      <div className="cartItemContent">
        <div className="cartItemDetails">
          <h3>Product:{item.name}</h3>
          <h3>Id:{item._id}</h3>
          <h3>Avalible:Yes</h3>
          <h3>Price: {item.new_price}$</h3>
        </div>
        <div className="cartItemActions">
          <div className="quantityWrapper">
            <button onClick={() => dispatch(removeCartItem(item))}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => dispatch(addCartItem(item))}>+</button>
          </div>
          <p className="cartItemPrice">${itemPrice}</p>
        </div>
      </div>
    </div>
  );
}
