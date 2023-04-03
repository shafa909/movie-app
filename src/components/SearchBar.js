
import SearchIcon from "@mui/icons-material/Search";
import { useState, useRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import "./movieContainer.css";

function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);
  const textRef = useRef();

  const focusSearchBox = () => {
    textRef.current.focus();
  };

  const iconAdornment = showSearch
    ? {
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: "#d4d7dd" }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <CloseIcon style={{ color: "#d4d7dd" }} />
          </InputAdornment>
        ),
      }
    : {};

  return (
    <>
      {!showSearch && (
        <SearchIcon
          style={{ color: "#d4d7dd", fontSize: 25, marginTop: 7 }}
          onClick={() => focusSearchBox()}
        />
      )}
      <TextField
        inputRef={textRef}
        placeholder="Title, Movie, Keyword"
        size="small"
        sx={{
          input: {
            color: "#d4d7dd",
          },
          width: 0,
          "&:focus-within": {
            width: "60%",
            backgroundColor: "hsl(217, 32%, 18%)",
            "& fieldset": {
              border: "1px solid #00e0ff !important",
              borderRadius: 2,
            },
          },
          "& fieldset": { border: "none" },
          transition: "width 1s",
        }}
        onFocus={(e) => setShowSearch(true)}
        onBlur={(e) => setShowSearch(false)}
        InputProps={iconAdornment}
      />
    </>
  );
}

export default SearchBar;
