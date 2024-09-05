import React from "react";
import "./Auth.css";

export default function AuthPage() {
  function handleLogin(e) {
    e.preventDefault();
    console.log("login is working");
  }

  return (
    <div className="formWrapper">
      <h1>Login Admin</h1>
      <form onSubmit={handleLogin}>
        <div className="control">
          <p>Email</p>
          <input type="email" name="email" />
        </div>
        <div className="control">
          <p>Password</p>
          <input type="password" name="password" />
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}
