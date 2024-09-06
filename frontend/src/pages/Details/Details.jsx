import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import ItemPath from "../../components/ItemPath/ItemPath";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { all_product } from "../../assets/all_product";

export default function Details() {
  const { itemId } = useParams();
  const [user, setUser] = useState(null);

  const selectedItem = all_product.filter(
    (item) => item.id === parseFloat(itemId)
  );

  useEffect(() => {
    async function findProduct() {
      const response = await fetch(
        `http://localhost:3000/getproduct/${itemId}`
      );
      const resData = await response.json();
      setUser(resData);
    }

    findProduct();
  }, []);

  console.log(user);

  return (
    <div className="details">
      {user && <ItemPath item={user} />}
      {user && <ProductDetails item={user} />}
    </div>
  );
}
