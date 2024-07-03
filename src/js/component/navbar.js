import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Contacts App</Link>
        <div className="d-flex">
          <Link className="btn btn-success" to="/add-contact">
            Add New Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
