import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Card({ data, percentage }) {
  function convertTMDBReleaseDateToUTC(releaseDate) {
    const localDate = new Date(releaseDate + "T00:00:00"); // Assuming release time is 00:00:00
    const utcYear = localDate.getUTCFullYear();
    const utcMonth = localDate.getUTCMonth() + 1; // Month is zero-indexed, so add 1
    const utcDay = localDate.getUTCDate();

    const utcDateString = `${utcYear}-${String(utcMonth).padStart(
      2,
      "0"
    )}-${String(utcDay).padStart(2, "0")}`;

    return utcDateString;
  }
  console.log(data);
  return (
    <div data-testid="movie-card">
      <Link to={`/movies/${data.id}`}>
        <div>
          <Image
            className="w-100 h-100"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            data-testid="movie-poster"
          />
        </div>
      </Link>

      <Link to={`/movies/${data.id}`}>
        <h3 data-testid="movie-title" className="mt-3">
          {data.title}
        </h3>
      </Link>

      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex gap-2 align-item-center">
          <Image
            src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694595577/cofeshop/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE_1_qaz2ip.webp"
            alt="imdb image"
            className="imdb-image"
          />
          <p className="mb-0 small-text ">{data.vote_average.toFixed(2)}/10</p>
        </div>
        <div className="d-flex gap-2 align-item-center">
          <Image
            src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694596461/cofeshop/PngItem_1381056_1_1_fkoyqh.png"
            alt="imdb image"
          />
          <p className="mb-0 small-text ">{percentage()}%</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
