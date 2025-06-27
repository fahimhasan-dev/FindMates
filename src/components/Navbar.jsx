import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  // LogOut function
  const { user, userSignOut } = use(AuthContext);
  const handleLogOut = () => {
    userSignOut();
  };
console.log(user)
  // Theme Functionality
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <div className="navbar fixed top-0 left-0 right-0 bg-white shadow-md z-50  flex justify-between shadow-xl/20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/findRoommate">Add to Find Roommate</NavLink>
              </li>
              <li>
                <NavLink to="/browseListing">BrowseListing</NavLink>
              </li>

              <li>
                <NavLink to="/myRoommatePosts">MyListings</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-1">
            <div className="avatar">
              <div className="md:w-10 w-6  lg:w-15 rounded">
                <img
                  className="md:flex hidden"
                  src="https://i.ibb.co/q3NJtxch/200ef352347115-590d3a6c4f601.png"
                />
              </div>
            </div>
            <div>
              <a className=" md:text-2xl -ml-10 md:ml-0 lg:text-2xl font-bold text-[#3d92e7ef]">
                {" "}
                FindMates{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal dark:text-black  font-bold text-xl px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/findRoommate"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }
              >
                Add to Find Roommate
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/browseListing"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }
              >
                BrowseListing
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myRoommatePosts"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }
              >
                MyListings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }
              >
               Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:mr-3   space-x-0.5 md:space-x-2">
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <svg
                className="swap-off h-5 w-5 lg:h-8 lg:w-8  xl:w-8 xl:h-8 pt-1  -ml-8  lg:mr-0 md:h-8 md:w-8 md:mr-7  fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            ) : (
              <svg
                className="swap-on dark:text-black h-5 w-5 flex  -ml-8 md:h-10 lg:h-8 lg:w-8 md:w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            )}
          </button>
          {user ? (
            <div>
              <div className="relative group inline-block avatar space-x-1 ">
                <div className="avatar avatar-online">
                  <div className="w-15 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>

                <h1
                  className="absolute top-full left-1/2 translate-x-[-50%] mt-2 
                             text-black  rounded  px-2 py-1 font-bold bg-white
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                            whitespace-nowrap z-10"
                >
                  {user.displayName}
                </h1>
              </div>
              <button
                onClick={handleLogOut}
                className=" md:font-semibold md:py-5  text-sm  rounded-xl  px-7 border bg-[#3d92e7] text-white  hover:bg-[#3d92e7ef]"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className=" ">
              <Link
                to="/auth/login"
                className=" md:font-bold md:py-5 md:text-xl -ml-10   font-light  py-1 px-3 text-sm  hover:text-[#3d92e7ef]"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className=" md:font-bold md:py-4 md:rounded-xl py-2 lg:text-sm lg:px-4 xl:px-6 font-light md:text-xl rounded md:px-6  px-3 text-sm border bg-[#3d92e7] text-white hover:bg-[#3d92e7ef]"
              >
                Sing Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
