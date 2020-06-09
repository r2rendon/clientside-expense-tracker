import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.classList.add("loginBckg");
  }, []);

  const hSubmit = async (e) => {
    e.preventDefault();
    const user = await axios(`http://localhost:5000/user/${username}`);
    if (user.data.length !== 0) {
      console.log();
      if (user.data[0].password !== password) alert("Incorrect Password");
      else {
        const token = jwt.sign(
          user.data[0],
          process.env.REACT_APP_PRIVATE_KEY,
          {
            expiresIn: "1d",
          }
        );
        localStorage.setItem("currentUser", token);
        props.history.push("/dashboard");
      }
    } else {
      alert("The specified username doesn't exist!");
    }
  };

  return (
    <div
      className="container col-md-4 shadow-lg p-3 mb-5 bg-white rounded"
      style={{ marginTop: 150 }}
    >
      <div className="card">
        <h2 className="card-header text-center">Login</h2>
        <div className="card-body">
          <form onSubmit={hSubmit}>
            <p>Welcome to the Expense Tracker Login!</p>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
