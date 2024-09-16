import React from "react";
import "./ProductDetails.css";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/CartSlice";

export default function ProductDetails({ item }) {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addCartItem(item));
  }

  const avalible = item.avalible;
  return (
    <div className="productDetails">
      <div className="productDetailsLeft">
        <img src={item.image} alt="itemDetailsImage" />
      </div>
      <div className="productDetailsRight">
        <h2>{item.name}</h2>
        <div className="productDetailsPrice">
          <p>${item.old_price.toFixed(2)}</p>
          <p>${item.new_price.toFixed(2)}</p>
        </div>
        <b>
          <p>In Stock: {avalible ? "Yes" : "No"}</p>
        </b>
        <p className="productDetailsDes">{item.description}</p>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  );
}
