import React from "react";
import "./CartItem.css";

export default function CartItem({ item }) {
  return (
    <div className="cartItem">
      <img src={item.image} alt="itemImage" />
      <div className="cartItemContent">
        <div className="cartItemDetails">
          <h3>Product:{item.name}</h3>
          <h3>Id:{item.id}</h3>
          <h3>Avalible:Yes</h3>
          <h3>Old Price:{item.old_price}$</h3>
        </div>
        <div className="cartItemActions">
          <div className="quantityWrapper">
            <button>-</button>
            <p>5</p>
            <button>+</button>
          </div>
          <p className="cartItemPrice">$50</p>
        </div>
      </div>
    </div>
  );
}
