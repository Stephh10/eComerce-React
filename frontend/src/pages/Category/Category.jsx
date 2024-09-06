import React, { useState, useEffect } from "react";
import "./Category.css";
import { all_product } from "../../assets/all_product";
import Item from "../../components/Item/Item";

export default function Category({ category }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/getproducts");
        const resData = await response.json();
        console.log(resData);
        const filteredData = resData.filter(
          (product) => product.category === category
        );
        setAllProducts(filteredData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [category]);

  console.log(allProducts);

  return (
    <div className="category">
      <p className="categoryShow">
        <span>Showing 1-12</span> out of <span>36</span> products
      </p>
      <div className="categoryGrid">
        {allProducts?.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
      <div className="categoryAction">
        <button onClick={() => alert("Comming soon")}>Load more</button>
      </div>
    </div>
  );
}
