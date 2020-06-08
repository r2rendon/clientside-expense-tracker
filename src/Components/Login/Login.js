import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="container col-md-4 shadow-lg p-3 mb-5 bg-white rounded"
      style={{ marginTop: 150 }}
    >
      <div class="card">
        <h2 class="card-header text-center">Login</h2>
        <div class="card-body">
          <form>
            <p>Welcome to the Expense Tracker Login!</p>
            <div className="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="pass"
                placeholder="Password"
              />
            </div>
            <button class="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
