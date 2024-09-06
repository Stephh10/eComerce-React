import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const img2 =
  "https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Item({ item }) {
  return (
    <div className="item">
      <Link to={`/item/${item._id}`}>
        <img src={img2} alt="itemImage" />
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
