import React, { useState, useEffect } from "react";
import "./Category.css";
import Item from "../../components/Item/Item";

export default function Category({ category }) {
  const [allProducts, setAllProducts] = useState([]);
  const [productNum, setProductNum] = useState(null);
  const [filter, setFilter] = useState("");
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

  useEffect(() => {
    if (filter === "high") {
      setAllProducts((prev) => {
        return [...prev].sort((a, b) => b.new_price - a.new_price);
      });
    } else if (filter === "low") {
      setAllProducts((prev) => {
        return [...prev].sort((a, b) => a.new_price - b.new_price);
      });
    } else if (filter === "new") {
      setAllProducts((prev) => {
        return [...prev].sort((a, b) => new Date(b.date) - new Date(a.date));
      });
    } else {
      setAllProducts((prev) => {
        return [...prev].sort((a, b) => new Date(a.date) - new Date(b.date));
      });
    }
  }, [filter]);

  return (
    <div className="category">
      <div className="categoryControl">
        <p className="categoryShow">
          Showing <span>1-{endProductIndex}</span> out of
          <span> {allProducts.length}</span> products
        </p>
        <div>
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="filterSelect"
          >
            <option value="">Oldest</option>
            <option value="new">Newest</option>
            <option value="high">Price (High)</option>
            <option value="low">Price (Low)</option>
          </select>
        </div>
      </div>

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
