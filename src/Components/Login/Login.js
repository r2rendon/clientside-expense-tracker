import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const hSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="container col-md-4 shadow-lg p-3 mb-5 bg-white rounded"
      style={{ marginTop: 150 }}
    >
      <div class="card">
        <h2 class="card-header text-center">Login</h2>
        <div class="card-body">
          <form onSubmit={hSubmit}>
            <p>Welcome to the Expense Tracker Login!</p>
            <div className="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button class="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
