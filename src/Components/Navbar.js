import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
  const [name, setName] = useState("");

  const signOut = () => {
    localStorage.removeItem("currentUser");
    props.history.push("/");
  };

  useEffect(() => {
    const getFirstName = async () => {
      const user = await axios.post("http://localhost:5000/auth", {
        token: localStorage.getItem("currentUser"),
      });

      setName(user.data.fName);
    };

    getFirstName();
  }, []);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand mb-0 h1" href="#">
        Expense Tracker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Welcome {name}!
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={signOut}>
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
