import React from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import ItemPath from "../../components/ItemPath/ItemPath";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { all_product } from "../../assets/all_product";

export default function Details() {
  const { itemId } = useParams();

  const selectedItem = all_product.filter(
    (item) => item.id === parseFloat(itemId)
  );

  return (
    <div className="details">
      <ItemPath item={selectedItem[0]} />
      <ProductDetails item={selectedItem[0]} />
    </div>
  );
}
