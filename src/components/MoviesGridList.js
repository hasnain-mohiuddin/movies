import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

const MoviesGridList = ({ moviesList }) => {
  return moviesList.length > 0 ? (
    <Grid container direction="row" sx={{ overflowX: "scroll" }} wrap="nowrap">
      {moviesList.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </Grid>
  ) : null;
};

export default MoviesGridList;
