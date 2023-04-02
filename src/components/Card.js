import "./card.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Card({ data }) {
  return (
    <div className="main-box">
      <img className="movie-image" src={data.Poster} alt={data.Title}></img>
      <span className="movie-title">{data.Title}</span>
      <div className="icon-box">
        <PlayCircleOutlineIcon />
        <AddCircleOutlineIcon />
      </div>
    </div>
  );
}

export default Card;
