import React from "react";
import { FaHome, FaThList } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import {
  MdAddBox,
 
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { NavLink } from "react-router";
// import { FaHome, FaList, FaThList } from "react-icons/fa";
// import { MdAddBox, MdOutlineListAlt, MdOutlineSpaceDashboard } from "react-icons/md";
// import { NavLink } from "react-router";

const LeftAside = () => {
  return (
    <div className="w-[70%] md:w-auto bg-black card-hover-bg  h-full  border-r-3 cardBoarder  ">
      <div className="navbar navbar-bg   shadow-xl/20 shadow-sm">
        <div className="flex mx-auto justify-center items-center space-x-1">
          <div className="avatar">
            <div className="w-10 md:mr-0 mr-10 lg:w-15 rounded">
              <img src="https://i.ibb.co/q3NJtxch/200ef352347115-590d3a6c4f601.png" />
            </div>
          </div>

          <div>
            <a className=" md:text-2xl NVtext-color -ml-10 md:ml-0 lg:text-2xl font-bold ">
              {" "}
              FindMates{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="mt-3  w-[90%] mx-auto rounded py-3 px-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " bg-white text-blue-500 p-3 rounded flex items-center gap-1 font-bold"
                : "flex  items-center gap-1 font-bold "
            }
          >
            <FaHome size={25} />
            Home
          </NavLink>
        </div>
        <div className="mt-3  w-[90%] mx-auto  rounded py-3 px-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "  text-[#1b6eda] p-3 rounded flex items-center gap-1 font-bold"
                : "flex  items-center gap-1 font-bold "
            }
          >
            <MdOutlineSpaceDashboard size={25} />
            Dashboard
          </NavLink>
        </div>
        <div className="mt-3  w-[90%] mx-auto   rounded py-3 px-4">
          <NavLink
            to="/dashboard/addPost"
            className={({ isActive }) =>
              isActive
                ? " bg-white text-blue-500 p-3 rounded flex items-center gap-1 font-bold"
                : "flex  items-center gap-1 font-bold "
            }
          >
            <MdAddBox size={25} />
            Add Post
          </NavLink>
        </div>
        <div className="mt-3  w-[90%] mx-auto   rounded py-3 px-4">
          <NavLink
            to="/dashboard/MyPosts"
            className={({ isActive }) =>
              isActive
                ? " bg-white text-blue-500 p-3 rounded flex items-center gap-1 font-bold"
                : "flex  items-center gap-1 font-bold "
            }
          >
            <FaThList />
            My Posts
          </NavLink>
        </div>
        <div className="mt-3  w-[90%] mx-auto   rounded py-3 px-4">
          <NavLink
            to="/dashboard/MyProfile"
            className={({ isActive }) =>
              isActive
                ? " bg-white text-blue-500 p-3 rounded flex items-center gap-1 font-bold"
                : "flex  items-center gap-1 font-bold "
            }
          >
            <ImProfile />
            My Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftAside;
