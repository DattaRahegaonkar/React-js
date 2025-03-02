import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="shadow-md">
      {auth ? (
        <ul className="flex p-4 font-medium justify-end justify-center items-center  ">
          <div className=" flex absolute w-3xl left-0 justify-center items-center">
            <li className="pl-20 pr-20">
              <NavLink
                to={auth ? "/" : "/signup"}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Logo
              </NavLink>
            </li>
            <li className="pr-20">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/"
              >
                Product
              </NavLink>
            </li>
            <input
              type="text"
              placeholder="Search"
              className=" outline-1 h-10 w-3xl rounded-3xl pl-5"
            />
          </div>
          <div className="flex justify-evenly w-2xl pr-5 justify-center items-center w-3xl">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/add"
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/update"
              >
                Update Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className="active-link-red"
                onClick={logout}
                to="/signup"
              >
                Logout ({JSON.parse(auth).name})
              </NavLink>
            </li>
          </div>
        </ul>
      ) : (
        <ul className="flex p-4 font-medium justify-end justify-center items-center ">
          <div className="flex w-70 absolute left-0 justify-center justify-evenly ">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to={auth ? "/" : "/signup"}
              >
                Logo
              </NavLink>
            </li>
          </div>

          <div className="flex w-100 justify-center justify-evenly ">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/signup"
              >
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
