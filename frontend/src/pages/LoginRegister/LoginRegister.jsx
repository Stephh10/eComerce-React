import React, { useEffect, useState } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginRegister() {
  const [formType, setFormType] = useState("Login");
  const loginForm = formType === "Login";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.user);

  function handleLogin(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd);
    dispatch(fetchUser({ userData: formData, route: "login" })).then(
      (result) => {
        if (fetchUser.fulfilled.match(result)) {
          navigate("/");
          toast.success("Successfuly logged in");
        } else {
          toast.error("Wrong username or password");
        }
      }
    );
  }

  function handleRegister(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd);
    dispatch(fetchUser({ userData: formData, route: "register" })).then(
      (result) => {
        if (fetchUser.fulfilled.match(result)) {
          navigate("/");
          toast.success("Account created");
        } else {
          toast.error("User already exist");
        }
      }
    );
  }

  useEffect(() => {
    if (currentUserData.currentUser) {
      return navigate("/");
    }
  }, [currentUserData.currentUser]);

  return (
    <div className="formWrapper">
      <h1>{formType}</h1>
      <form onSubmit={loginForm ? handleLogin : handleRegister}>
        {!loginForm && (
          <div className="control">
            <p>Username</p>
            <input type="text" name="username" />
          </div>
        )}

        <div className="control">
          <p>Email</p>
          <input type="email" name="email" />
        </div>
        <div className="control">
          <p>Password</p>
          <input type="password" name="password" />
        </div>
        <button>{currentUserData.isLoading ? "Loading" : "Confirm"}</button>

        {loginForm && (
          <p className="formChange">
            Don't have an account yet?
            <Link onClick={() => setFormType("Register")}>Register here</Link>
          </p>
        )}

        {!loginForm && (
          <p className="formChange">
            Have an account ?
            <Link onClick={() => setFormType("Login")}>Login here</Link>
          </p>
        )}
      </form>
    </div>
  );
}
