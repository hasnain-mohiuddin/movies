import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import MoviesGridList from "./MoviesGridList";
import { POPULAR_MOVIES_TITLE } from "../constants/constants";
import { fetchTrendingMovies } from "../services/moviesService";
import { GRAY9, WHITE } from "../constants/colors";
import Pagination from './PaginationComponent'

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [mediaCount, setMediaCount] = useState(0);

  const fetchTrending = async (pageNumber) => {
    try {
      const { data } = await fetchTrendingMovies(pageNumber);
      setMediaCount(data.total_pages);
      setPopularMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event, value) => {
    fetchTrending(value);
  };

  useEffect(() => {
    fetchTrending(1);
  }, []);

  return (
    <Container
      sx={{ backgroundColor: GRAY9, paddingBottom: 3 }}
      maxWidth={false}
    >
      <Container>
        <Typography
          gutterBottom
          variant="h4"
          p={2}
          fontSize={"2rem"}
          sx={{
            color: WHITE,
          }}
        >
          {POPULAR_MOVIES_TITLE}
        </Typography>
        {popularMovies ? (
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <MoviesGridList moviesList={popularMovies} pageCount={mediaCount} />
            <Pagination pageCount={mediaCount} onChange={handleChange} />
          </Box>
        ) : null}
      </Container>
    </Container>
  );
};

export default PopularMovies;
