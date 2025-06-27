import React from "react";
import { FaHome, FaThList } from "react-icons/fa";
import {
  MdAddBox,
  MdOutlineListAlt,
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
              <img src="https://i.ibb.co/35dHDb5j/png-clipart-running-people-running-london-marathon-the-color-run-sport-others-miscellaneous-running.png" />
            </div>
          </div>

          <div>
            <a className=" md:text-2xl NVtext-color -ml-10 md:ml-0 lg:text-2xl font-bold ">
              {" "}
              MarathonHub{" "}
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
            to="/dashboard/addMarathons"
            className={({ isActive }) =>
              isActive
                ? " bg-white text-blue-500 p-3 rounded flex items-center gap-1 font-bold"
                : "flex  items-center gap-1 font-bold "
            }
          >
            <MdAddBox size={25} />
            Add Marathon
          </NavLink>
        </div>
        <div className="mt-3  w-[90%] mx-auto   rounded py-3 px-4">
          <NavLink
            to="/dashboard/myMarathonsList"
            className={({ isActive }) =>
              isActive
                ? " bg-white text-blue-500 p-3 rounded flex items-center gap-1 font-bold"
                : "flex  items-center gap-1 font-bold "
            }
          >
            <FaThList />
            My Marathon List
          </NavLink>
        </div>
        <div className="mt-3  w-[90%] mx-auto   rounded py-3 px-4">
          <NavLink
            to="/dashboard/myApplications"
            className={({ isActive }) =>
              isActive
                ? " bg-white text-blue-500 p-3 rounded flex items-center gap-1 font-bold"
                : "flex  items-center gap-1 font-bold "
            }
          >
            <MdOutlineListAlt />
            My Apply List
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftAside;
