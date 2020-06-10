import React, { useState, useEffect } from "react";
import axios from "axios";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.body.classList.add("loginBckg");
  }, []);

  const goToLogin = (e) => {
    e.preventDefault();
    props.history.push("/");
  };

  return (
    <div className="container col-md-4 rounded" style={{ marginTop: 150 }}>
      <div className="card">
        <h2 className="card-header text-center">Register</h2>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="john@expense.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <a href="" onClick={goToLogin}>
              Not Here? Back to Login!
            </a>
            <button className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};
