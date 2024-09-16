import React, { useState, useEffect } from "react";
import "./Category.css";
import Item from "../../components/Item/Item";

export default function Category({ category }) {
  const [allProducts, setAllProducts] = useState([]);
  const [productNum, setProductNum] = useState(null);
  const endProductIndex = Math.min(productNum, allProducts.length);
  const noProducts = productNum >= allProducts.length;

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
        setProductNum(9);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [category]);

  return (
    <div className="category">
      <p className="categoryShow">
        <span>Showing 1-{endProductIndex}</span> out of
        <span> {allProducts.length}</span> products
      </p>
      <div className="categoryGrid">
        {allProducts?.slice(0, productNum).map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
      <div className="categoryAction">
        <button
          disabled={noProducts}
          onClick={() => setProductNum((prev) => prev + 3)}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
