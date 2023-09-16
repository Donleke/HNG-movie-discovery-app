import React from "react";
import { Image } from "react-bootstrap";

function Logo({ color }) {
  return (
    <div className="d-flex gap-3 align-items-center">
      <div style={{ height: "50px", width: "50px" }}>
        <Image
          src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694553198/cofeshop/tv_vnewym.webp"
          alt="logo"
          className="w-100 h-100"
        />
      </div>

      <h3 className={`mb-0 moviebox sans text-${color}`}>MovieBox</h3>
    </div>
  );
}

export default Logo;
