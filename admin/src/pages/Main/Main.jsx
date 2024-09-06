import React, { useEffect, useState } from "react";
import "./Main.css";
import Products from "../../components/Products/Product";
import NewProduct from "../../components/NewProduct/NewProduct";
import Users from "../../components/Users/Users";
import Orders from "../../components/Orders/Orders";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [page, setPage] = useState("products");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.currentUser) {
      navigate("/auth");
    }
  }, [user.currentUser]);

  return (
    <div className="main">
      <div className="sidebar">
        <button
          className={page == "products" ? "active" : null}
          onClick={() => setPage("products")}
        >
          Products
        </button>
        <button
          className={page == "new" ? "active" : null}
          onClick={() => setPage("new")}
        >
          New Product
        </button>
        <button
          className={page == "users" ? "active" : null}
          onClick={() => setPage("users")}
        >
          Users
        </button>
        <button
          className={page == "orders" ? "active" : null}
          onClick={() => setPage("orders")}
        >
          Orders
        </button>
      </div>
      <div className="mainContent">
        {page == "products" && <Products />}
        {page == "new" && <NewProduct setPage={setPage} />}
        {page == "users" && <Users />}
        {page == "orders" && <Orders />}
      </div>
    </div>
  );
}
