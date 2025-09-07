import React, { useContext } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const logoUrl =
  "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bc.png"; // Replace with your logo URL or local path

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate();

  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="shadow py-2">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Company Logo */}
        <div
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
        {user ? (
          <div className="flex gap-3 max-sm:text-xs items-center">
            <Link to={"/applications"}>Applied Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi, {user.firstName}</p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button
              onClick={(e) => setShowRecruiterLogin(true)}
              className="border border-blue-600 text-blue-600 px-6 sm:px-9 py-2 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
            >
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 sm:px-9 py-2 rounded-full shadow-md transition-transform duration-200 hover:scale-105 hover:from-blue-600 hover:to-blue-800"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
