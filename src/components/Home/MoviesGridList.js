import React from "react";
import { Grid } from "@mui/material";

import MovieCard from "./MovieCard/MovieCard";

const MoviesGridList = ({ moviesList }) => {
  return moviesList.length > 0 ? (
    <Grid container direction="row" spacing={4}>
      {moviesList.map((movie) => (
        <Grid key={movie.id} item xs={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  ) : null;
};

export default MoviesGridList;
