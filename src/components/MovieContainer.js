import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import mdata from "../data.json";
import GridView from "./GridView";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./movieContainer.css";

function MovieContainer({ drawerWidth, handleDrawerToggle }) {
  const [searchWord, setSearchWord] = useState("");
  const [movieData, setMovieData] = useState(mdata);

  useEffect(() => {
    if (!searchWord) setMovieData(mdata);
    else {
      const FilterdData = filterItems(mdata, searchWord);
      setMovieData(FilterdData);
    }
  }, [searchWord]);

  function filterItems(arr, query) {
    return arr.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <Box
      className="main-container"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <IconButton
        className="mobile-menu-icon"
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <SearchBar setSearchWord={setSearchWord} />
      <div className="setting-icon">
        <LightModeIcon style={{ color: "#d4d7dd" }} />
        <MoreVertIcon style={{ color: "#d4d7dd" }} />
      </div>
      <GridView  movieData={movieData} />
    </Box>
  );
}

export default MovieContainer;
