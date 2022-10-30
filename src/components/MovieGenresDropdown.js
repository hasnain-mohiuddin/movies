import React from "react";
import { MenuItem, Select } from "@mui/material";
import { WIHITE_HEXA } from "../utils/colors";

const MovieGenresDropdown = ({ genresList, genresType, handleChange }) => {
  return (
    <Select
      labelId="genres-select-dropdown"
      id="genres-select-dropdown"
      value={genresType}
      label="Select Genres"
      onChange={handleChange}
      sx={{
        backgroundColor: WIHITE_HEXA,
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    >
      {genresList.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MovieGenresDropdown;
