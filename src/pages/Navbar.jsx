import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../components/context/Authentication";
import "../components/styles.css";

const Navbar = () => {
  const auth = useAuth();
  return (
    <>
      <nav>
        <div className="navbar">
          <NavLink to="/" className="navBrand">
            PROTECTED ROUTE
          </NavLink>
          <div className="topnav">
            <NavLink to="/" className="navLink">
              Home
            </NavLink>
            <NavLink to="/about" className="navLink">
              About
            </NavLink>
            <Link to="/profile" className="navLink">
              Profile
            </Link>
            {!auth.user && (
              <NavLink to="/loginform" className="navLink">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
