import React, { useState, useEffect } from "react";
import axios from "axios";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.body.classList.add("loginBckg");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) alert("The Passwords must match!");
    else {
      const newUser = {
        username: username,
        password: password,
        email: email,
        fName: fName,
        lName: lName,
        balance: 0,
      };

      await axios.post("http://localhost:5000/user", newUser);

      setUsername("");
      setPassword("");
      setFName("");
      setLName("");
      setConfirmPassword("");
      setEmail("");
      setShowPassword(false);

      props.history.push("/");
    }
  };

  const goToLogin = (e) => {
    e.preventDefault();
    props.history.push("/");
  };

  return (
    <div className="container col-md-4 rounded" style={{ marginTop: 7 }}>
      <div className="card">
        <h2 className="card-header text-center">Register</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="username">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
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
              <label htmlFor="email">Email</label>
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
                type={showPassword === false ? "password" : "text"}
                className="form-control"
                id="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showPassword === false ? "password" : "text"}
                className="form-control"
                id="confirmPass"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <BootstrapSwitchButton
              checked={confirmPassword}
              onlabel="Hide"
              offlabel="Show"
              width={90}
              onChange={() => {
                setShowPassword(!showPassword);
              }}
            />
            <br />
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
