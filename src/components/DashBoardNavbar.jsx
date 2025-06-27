import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { LuAlignLeft } from "react-icons/lu";
import LeftAside from "./LeftAside";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const DashBoardNavbar = () => {
  const { user, userSignOut } = use(AuthContext);
  const [theme, setTheme] = useState("dark");

  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "LogOut Success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.code}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
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
    <div className="navbar navbar-bg cardBoarder border-b-3 shadow-2xl flex justify-between shadow-xl/20 ">
      <div className="navbar-start">
        <div className="xl:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="  drawer-button">
              <LuAlignLeft size={20} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden md:flex"></div>
      <div className="navbar-end md:mr-3   space-x-0.5 md:space-x-2">
        <div className="md:mr-7 mt-5 flex pb-2 items-center">
          <button onClick={toggleTheme} className="pr-5 NVtext-color ">
            {theme === "light" ? (
              <MdOutlineLightMode size={25} />
            ) : (
              <MdOutlineNightlight size={25} />
            )}
          </button>
        </div>
        {user ? (
          <div className="flex">
            <div className="relative group mr-3  inline-block avatar space-x-1 ">
              <div className="avatar avatar-online ">
                <div className="md:w-15 w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>

              <h1
                className="absolute top-full left-1/2 translate-x-[-50%] mt-2 
                                    primary-text  rounded  px-2 py-1 font-bold card-bg 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                   whitespace-nowrap z-10"
              >
                {user.displayName}
              </h1>
            </div>
            <button
              onClick={handleLogOut}
              className="  lg:font-bold lg:py-4 md:rounded-xl py-2 lg:text-sm lg:px-4 xl:px-6 font-light md:text-xl rounded md:px-6  px-3 text-sm border btn-bg  button-text md:hover:text-[15px]"
            >
              LogOut
            </button>
          </div>
        ) : (
          ""
          // <div className=" mt-5">
          //   <Link
          //     to="/auth/login"
          //     className=" md:font-bold md:py-5 md:text-xl -ml-10 md:hover:text-[21px] button-text  font-light  py-1 px-3 text-sm nav-button "
          //   >
          //     Login
          //   </Link>
          //   <Link
          //     to="/auth/register"
          //     className=" md:font-bold md:py-4 md:rounded-xl py-2 lg:text-sm lg:px-4 xl:px-6 font-light md:text-xl rounded md:px-6  px-3 text-sm border btn-bg  button-text md:hover:text-[15px] "
          //   >
          //     Sing Up
          //   </Link>
          // </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardNavbar;
