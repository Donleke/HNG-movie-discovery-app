import { AiFillStar } from "react-icons/ai";

function DetailStats({ movie }) {
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
  return (
    <div className="d-flex flex-wrap gap-3 gap-lg-0 justify-content-lg-between">
      <div className="d-flex gap-2 flex-wrap align-items-center gap-3">
        <h3 data-testid="movie-title" className="mb-0">
          {movie.title}
        </h3>
        <div
          style={{
            height: "5px",
            width: "5px",
            borderRadius: "50%",
            background: "black",
          }}
        ></div>
        <h3 data-testid="movie-release-date" className="mb-0">
          {convertTMDBReleaseDateToUTC(movie.release_date)}
        </h3>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "black",
          }}
        />
        <h3 className="mb-0"> PG-{movie.adult ? "18+" : 13}</h3>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "black",
          }}
        />
        <h3 data-testid="movie-runtime" className="mb-0">
          {movie.runtime}
          {/* {movie.runtime < 60
            ? `${movie.runtime}mins `
            : movie.runtime === 60
            ? "1hr"
            : movie.runtime < 120
            ? `${Math.floor(movie.runtime / 60)}hr ${movie.runtime % 60}mins`
            : `${Math.floor(movie.runtime / 60)}hrs ${movie.runtime % 60}mins`} */}
        </h3>

        <div className="d-flex gap-2">
          {movie.genres.slice(0, 2).map((each) => (
            <div
              key={each.id}
              style={{
                padding: "10px 20px",
                border: "1px solid rgba(248, 231, 235, 1)",
                borderRadius: "15px",
              }}
            >
              <p className="mb-0">{each.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <AiFillStar size={30} color="gold" />
          <h3 style={{ color: "rgb(232,232,232)" }}>
            {movie.vote_average.toFixed(2)}
          </h3>
        </div>
        <h3>|</h3>
        <h3 style={{ color: "rgb(102,102,102)" }}>{movie.vote_count}</h3>
      </div>
    </div>
  );
}

export default DetailStats;
