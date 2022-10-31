import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Box, Container, Typography, CardMedia } from "@mui/material";

import { fetchMovie, fetchTvShow } from "../services/moviesService";
import { GET_CARD_IMAGE_LINK } from "../utils/constants";
import CardRatings from "./CardRatings";

const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (location.pathname.includes("movie")) getMovieById();
    else getTVShowById();
  }, []);

  const getMovieById = async () => {
    try {
      const { data } = await fetchMovie(params.id);
      setMovie(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTVShowById = async () => {
    const { data } = await fetchTvShow(params.id);
    setMovie(data);
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "flex-start", mx: 0 }}>
      <Box sx={{ display: "flex", my: 10 }}>
        <Box
          sx={{
            minWidth: 350,
            objectFit: "contain",
            mx: 10,
          }}
        >
          <CardMedia
            sx={{ borderRadius: 4 }}
            component="img"
            alt="Movie Image"
            image={GET_CARD_IMAGE_LINK(movie.backdrop_path)}
          />
        </Box>
        <Box paddingY={10}>
          <Typography marginBottom={3} variant="h4" sx={{ fontWeight: "bold" }}>
            {movie.name || movie.title}
          </Typography>
          <Typography variant="p" fontSize={18} color="text.secondary">
            {movie.first_air_date || movie.release_date}
          </Typography>
          <Box marginY={3} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="p" fontSize={18} fontWeight={"bold"}>
              Overview
            </Typography>
            <Typography variant="p" fontSize={18}>
              {movie.overview}
            </Typography>
          </Box>
          <Box
            marginY={3}
            sx={{ display: "flex", flexDirection: "column", maxWidth: 250 }}
          >
            <Typography
              marginBottom={2}
              variant="p"
              fontSize={18}
              fontWeight={"bold"}
            >
              Ratings
            </Typography>
            <CardRatings averageScore={movie.vote_average} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MovieDetails;
