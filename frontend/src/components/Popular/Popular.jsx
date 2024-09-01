import React from "react";
import "./Popular.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

export default function Popular() {
  return (
    <div className="popular">
      <h1>Our popular products</h1>
      <div className="line"></div>
      <div className="popularGrid">
        {data_product.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
