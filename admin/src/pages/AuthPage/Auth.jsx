import React, { useEffect } from "react";
import "./Auth.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../store/UserSlice";
import { toast } from "react-toastify";
import { removeUser } from "../../store/UserSlice";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    dispatch(removeUser());
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());
    dispatch(fetchUser(formData));
  }

  useEffect(() => {
    if (!user.currentUser) {
      toast.error(user.error);
    } else {
      toast.success("All good");
      navigate("/");
    }
  }, [user]);

  return (
    <div className="formWrapper">
      <h1>Login Admin</h1>
      <form onSubmit={handleLogin}>
        <div className="control">
          <h5>Email</h5>
          <input type="email" name="email" />
        </div>
        <div className="control">
          <h5>Password</h5>
          <input type="password" name="password" />
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}
