import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="item">
      <Link to={`/item/${item._id}`}>
        <img src={item.image} alt="itemImage" />
      </Link>
      <div className="itemDetails">
        <b>
          <p>{item.name}</p>
        </b>
        <p>{item.description}</p>
        <div className="priceDetails">
          <p>${item.new_price}</p>
          <p>${item.old_price}</p>
        </div>
      </div>
    </div>
  );
}
