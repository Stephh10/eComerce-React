import React from "react";
import "./ProductDetails.css";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/CartSlice";

export default function ProductDetails({ item }) {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addCartItem(item));
  }
  return (
    <div className="productDetails">
      <div className="productDetailsLeft">
        <img src={"ss"} alt="itemDetailsImage" />
      </div>
      <div className="productDetailsRight">
        <h2>{item.name}</h2>
        <div className="productDetailsPrice">
          <p>${item.old_price.toFixed(2)}</p>
          <p>${item.new_price.toFixed(2)}</p>
        </div>
        <p className="productDetailsDes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem
          praesentium expedita in illum, modi quaerat ipsum pariatur temporibus
          amet iste iure consequatur minima nulla, incidunt eum molestiae
          dolores explicabo.
        </p>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  );
}
