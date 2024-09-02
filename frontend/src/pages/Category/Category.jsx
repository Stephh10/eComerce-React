import React from "react";
import "./Category.css";
import { all_product } from "../../assets/all_product";
import Item from "../../components/Item/Item";

export default function Category({ category }) {
  const selectedCategory = all_product.filter(
    (item) => item.category === category
  );
  return (
    <div className="category">
      <p className="categoryShow">
        <span>Showing 1-12</span> out of <span>36</span> products
      </p>
      <div className="categoryGrid">
        {selectedCategory.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className="categoryAction">
        <button onClick={() => alert("Comming soon")}>Load more</button>
      </div>
    </div>
  );
}
