import React from "react";
import { assets } from "../assets/assets";

const logoUrl =
  "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bc.png"; // Replace with your logo URL or local path

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex  justify-between items-center gap-4 py-3">
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
        />
        <span style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
          JobPortal
        </span>
      </div>

      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @vamshi.dev | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} alt="" width={38} />
        <img src={assets.twitter_icon} alt="" width={38} />
        <img src={assets.instagram_icon} alt="" width={38} />
      </div>
    </div>
  );
};

export default Footer;
