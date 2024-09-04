import React from "react";
import "./Nav.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Bag, ShoppingCart } from "phosphor-react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/UserSlice";
import { persistor } from "../../store/store";
import { toast } from "react-toastify";

export default function Nav() {
  const cartData = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogout() {
    await persistor.purge();
    dispatch(removeUser());
    toast.success("Logged out");
    navigate("/auth");
  }

  return (
    <div className="nav">
      <div className="navLogo">
        <Bag size={32} weight="bold" />
        <h1>eComerce</h1>
      </div>
      <ul className="navLinks">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/mens"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Men</li>
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Women</li>
        </NavLink>
        <NavLink
          to="/kids"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Kids</li>
        </NavLink>
      </ul>
      <div className="navActions">
        {!currentUser && (
          <NavLink
            to="/auth"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        )}

        {currentUser && <Link onClick={handleLogout}>Logout</Link>}

        <Link to={"/cart"}>
          <button>
            <ShoppingCart size={28} />
            <p>{cartData.cart.length}</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
