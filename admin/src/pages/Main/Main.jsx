import React, { useState } from "react";
import "./Main.css";
import Products from "../../components/Products/Product";
import NewProduct from "../../components/NewProduct/NewProduct";
import Users from "../../components/Users/Users";
import Orders from "../../components/Orders/Orders";

export default function Main() {
  const [page, setPage] = useState("products");
  console.log(page);
  return (
    <div className="main">
      <div className="sidebar">
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("new")}>New Product</button>
        <button onClick={() => setPage("users")}>Users</button>
        <button onClick={() => setPage("orders")}>Orders</button>
      </div>
      <div className="mainContent">
        {page == "products" && <Products />}
        {page == "new" && <NewProduct />}
        {page == "users" && <Users />}
        {page == "orders" && <Orders />}
      </div>
    </div>
  );
}
