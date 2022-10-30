import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography} from "@mui/material";
import MoviesGridList from "./MoviesGridList";
import {POPULAR_MOVIES_TITLE} from "../utils/constants";
import {NAVY_BLUE_HEXA, LIGHT_GREY_HEXA} from "../utils/colors"

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=342c371f5f83eb671d3747779a0bdfc2"
    );
    setPopularMovies(data.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <Container sx={{ backgroundColor: LIGHT_GREY_HEXA, p:8, pt:3 }} maxWidth={false}>
     <Typography gutterBottom variant="h4" fontFamily= "Raleway" p={2}  sx={{
        color: NAVY_BLUE_HEXA
      }}>{POPULAR_MOVIES_TITLE}</Typography>
      {popularMovies ? <MoviesGridList moviesList={popularMovies} />: null }
    </Container>
  );
};

export default PopularMovies;
