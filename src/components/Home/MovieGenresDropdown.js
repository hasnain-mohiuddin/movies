import React from "react";
import { MenuItem, Select } from "@mui/material";

const MovieGenresDropdown = ({ genresList, genresType, handleChange }) => {
  return (
    <Select
      value={genresType}
      onChange={handleChange}
      label={'Select Genre'}
    >
      {genresList.map((item) => (
        <MenuItem
          key={item.id}
          value={item.id}
        >
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MovieGenresDropdown;
