import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const DashBoard = () => {
  const navigate = useNavigate();
  const logoUrl =
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bc.png"; // Replace with your logo URL or local path

  return (
    <div className="min-h-screen">
      {/* Navbar for Recruiter*/}
      <div className="shadow py-4">
        {/* Company Logo */}
        <div className="px-5 flex justify-between items-center">
          <div
            className="max-sm:w-32 cursor-pointer"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
            }}
          >
            <img
              src={logoUrl}
              alt="JobPortal Logo"
              style={{ width: 40, height: 40, marginRight: 12 }}
              onClick={() => navigate("/")}
              className="cursor-pointer"
            />
            <span
              style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}
              onClick={() => navigate("/")}
              className="cursor-pointer"
            >
              JobPortal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome, GreatStack</p>
            <div className="relative group">
              <img
                className="w-8 border rounded-full"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded-full pt-12">
                <ul className="list-none m-0 p-2 bg-white border rounded-md text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">MyProfile</li>
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        {/* left Sidebar for options */}
        <div className=" inline-block min-h-screen border-r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={"/dashboard/add-job"}
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={"/dashboard/manage-job"}
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={"/dashboard/view-applications"}
            >
              <img className="min-w-4" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
