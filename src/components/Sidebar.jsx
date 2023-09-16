import React from "react";
import Logo from "./Logo";
import SideList from "./SideList";

function Sidebar() {
  return (
    <div className="sidebar ">
      <div className="sidefixed">
        <div className="overflow scrollbody">
          <div className="d-flex align-items-center flex-column ">
            <Logo color={"black"} />
          </div>
          <div className="mt-5">
            <SideList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
