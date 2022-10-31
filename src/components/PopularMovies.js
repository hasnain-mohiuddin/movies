import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

import MoviesGridList from "./MoviesGridList";
import { POPULAR_MOVIES_TITLE } from "../constants/constants";
import { fetchTrendingMovies } from "../services/moviesService";
import { NAVY_BLUE_HEXA, LIGHT_GREY_HEXA } from "../constants/colors";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchTrending = async () => {
    try {
      const { data } = await fetchTrendingMovies();
      setPopularMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <Container
      sx={{ backgroundColor: LIGHT_GREY_HEXA, p: 8, pt: 3 }}
      maxWidth={false}
    >
      <Typography
        gutterBottom
        variant="h4"
        fontFamily="Raleway"
        p={2}
        sx={{
          color: NAVY_BLUE_HEXA,
        }}
      >
        {POPULAR_MOVIES_TITLE}
      </Typography>
      {popularMovies ? <MoviesGridList moviesList={popularMovies} /> : null}
    </Container>
  );
};

export default PopularMovies;
