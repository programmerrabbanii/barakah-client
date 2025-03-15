import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/images (5).png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/" className="hover:text-primary transition-all">Home</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-primary transition-all">About</Link>
      </li>
      <li>
        <Link to="/history" className="hover:text-primary transition-all">History of Islam</Link>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-md">
      <div className="navbar w-11/12 mx-auto py-3">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/">
            <img className="h-14 md:h-16" src={navlogo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 text-lg font-medium">
            {links}
          </ul>
        </div>

        {/* Login and Registration Buttons */}
        <div className="navbar-end space-x-3">
          <Link to="/register" className="btn btn-outline btn-primary px-4">
            Register
          </Link>
          <Link to="/login" className="btn btn-primary px-4">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
