import "./detailView.css";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

function DetailView({ movieData, isOpen }) {

  const [open, setOpen] = useState();

  useEffect(() => {
    setTimeout(() => {
      setOpen(isOpen);
    }, 500);
  }, [isOpen]);

  return (
    <CSSTransition in={open} timeout={300} classNames="alert" unmountOnExit>
      <div className="d-main-container">
        <div className="image-box">
          <img className="movie-poster" src={movieData.Poster} alt={movieData.Title} />
        </div>
        <div className="data-box">
          <h1 className="movie-name">{movieData.Title}</h1>
          <ProgressBar
            label={`${movieData.imdbRating} / 10`}
            visualParts={[
              {
                percentage: `${parseFloat(movieData.imdbRating) * 10}%`,
                color: "#00E0FF",
              },
            ]}
          />
          <div className="info-box">
            <span className="info-details">
              <span className="info-title">Year:</span>
              {movieData.Year}
            </span>

            <span className="info-details">
              <span className="info-title">Running Time:</span>
              {movieData.Runtime}
            </span>

            <span className="info-details">
              <span className="info-title">Directed By:</span>
              {movieData.Director}
            </span>

            <span className="info-details">
              <span className="info-title">Language:</span>
              {movieData.Language}
            </span>
          </div>
          <p className="movie-desc">{movieData.Plot}</p>
          <div className="action-btn">
            <button className="play-btn">
            Play Movie
            </button>
            <button className="trailer-btn">
              Watch Trailer
            </button>

          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default DetailView;
