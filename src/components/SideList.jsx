import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiVideoRecording } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";

function SideList() {
  return (
    <div>
      <div className="d-flex flex-column gap-2 mb-4 ">
        <div className="d-flex gap-2 align-items-center py-4 px-5">
          <AiOutlineHome size={20} />
          <h4 className="mb-0">Home</h4>
        </div>
        <div className="d-flex gap-2 align-items-center py-4 px-5 movies">
          <BiVideoRecording size={20} />
          <h4 className="mb-0 ">Movies</h4>
        </div>
        <div className="d-flex gap-2 align-items-center py-4 px-5">
          <PiTelevisionSimpleBold size={20} />
          <h4 className="mb-0">TV Series</h4>
        </div>
        <div className="d-flex gap-2 align-items-center py-4 px-5">
          <AiOutlineHome size={20} />
          <h4 className="mb-0">Upcoming</h4>
        </div>
      </div>
      <div className="px-3 mb-3">
        <div className="quiz pt-4 pb-2 px-3">
          <h5>Play movie quizes and earn free tickets</h5>
          <p className="small-text">50k people are playing now</p>
          <div className="d-flex justify-content-center">
            <div className="px-3 py-2 playing">
              <p className="small-text mb-0">Start Playing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2 align-items-center py-4 px-5">
        <AiOutlineHome size={20} />
        <h4 className="mb-0">Log out</h4>
      </div>
    </div>
  );
}

export default SideList;
