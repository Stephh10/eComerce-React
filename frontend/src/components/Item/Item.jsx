import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="item">
      <Link to={`/item/${item.id}`}>
        <img src={item.image} alt="itemImage" />
      </Link>
      <div className="itemDetails">
        <p>{item.name}</p>
        <div className="priceDetails">
          <p>${item.new_price}</p>
          <p>${item.old_price}</p>
        </div>
      </div>
    </div>
  );
}
