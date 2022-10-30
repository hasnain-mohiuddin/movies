import React, { useState, useEffect } from "react";
import { InputLabel, FormControl } from "@mui/material";
import MovieGenresDropdown from "./MovieGenresDropdown";
import { GENERES_DROP_DOWN_LABEL } from "../utils/constants";
import { ORANGE_HEXA } from "../utils/colors";
import { fetchGenres } from "../services/moviesService";

const MovieGenres = ({ genresType, setGenresType }) => {
  const [genresList, setGenreList] = useState([]);

  const getGenres = async () => {
    const { data } = await fetchGenres();
    setGenreList(data.genres);
  };

  const handleChange = (event) => setGenresType(event.target.value);

  const getGenresLabel = () => (
    <InputLabel
      sx={{
        "&.Mui-focused": {
          color: ORANGE_HEXA,
          fontSize: "25px",
          fontWeight: "700",
          textAlign: "start",
          lineHeight: "1.8em",
        },
        fontSize: "18px",
        fontWeight: "700",
        color: ORANGE_HEXA,
      }}
      id="genres-select-dropdown"
    >
      {GENERES_DROP_DOWN_LABEL}
    </InputLabel>
  );

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <FormControl sx={{ width: "25%", minWidth: "200px", m: 1 }}>
      {getGenresLabel()}
      <MovieGenresDropdown
        genresList={genresList}
        genresType={genresType}
        handleChange={handleChange}
      />
    </FormControl>
  );
};

export default MovieGenres;
