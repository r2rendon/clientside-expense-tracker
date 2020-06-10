import React, { useState, useEffect } from "react";
import axios from "axios";

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
      if (user.data[0].password !== password) alert("Incorrect Password");
      else {
        const token = await axios.post("http://localhost:5000/auth/tokenify", {
          user: user.data[0],
        });
        localStorage.setItem("currentUser", token.data);
        props.history.push("/dashboard");
      }
    } else {
      alert("The specified username doesn't exist!");
    }
  };

  return (
    <div className="container col-md-4 rounded" style={{ marginTop: 150 }}>
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
            <a href="">Don't have an account? Sign Up!</a>
            <button className="btn btn-primary w-100">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
