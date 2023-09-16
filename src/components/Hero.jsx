import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";

function Hero({ data }) {
  const [current, setCurrent] = useState(0);

  console.log(data);
  return (
    <div className="hero-container position-relative">
      <Image
        src={`https://image.tmdb.org/t/p/original/${data[current].backdrop_path}`}
        style={{ objectFit: "cover" }}
        className="w-100 h-100"
      />

      <div className="position-absolute hero-text w-100">
        <div className="cc-container">
          <div className="text-holder">
            <h1 className="sans title overview mb-0 text-white ">
              {data[current].title.length > 32
                ? `${data[current].title.slice(0, 29).trim()}...`
                : data[current].title}
            </h1>
            <div className="d-flex gap-3 mt-2">
              <div className="d-flex gap-2 align-item-center">
                <Image
                  src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694595577/cofeshop/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE_1_qaz2ip.webp"
                  alt="imdb image"
                  className="imdb-image"
                />
                <p className="mb-0 small-text text-white">
                  {data[current].vote_average.toFixed(2)}/10
                </p>
              </div>
              <div className="d-flex gap-2 align-item-center">
                <Image
                  src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694596461/cofeshop/PngItem_1381056_1_1_fkoyqh.png"
                  alt="imdb image"
                />
                <p className="mb-0 small-text text-white">97%</p>
              </div>
            </div>
            <h6 className="sans overview mt-2">
              {data[current].overview.length > 240
                ? `${data[current].overview.slice(0, 237).trim()}... `
                : data[current].overview}
            </h6>
            <div className="hero-button d-flex gap-2 align-items-center mt-2">
              <AiFillPlayCircle color="white" size={20} />
              <h6 className="text-white mb-0">Watch Trailer</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute hero-number ">
        <div className="d-flex flex-column gap-0">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="d-flex gap align-items-center">
              <div
                style={{ border: "1px solid red" }}
                className={`${current === index ? "d-block" : "d-none"}`}
              />

              <p
                onClick={() => setCurrent(index)}
                className={`mb-0 small-text overview ${
                  current === index ? "active" : ""
                }`}
              >
                {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
