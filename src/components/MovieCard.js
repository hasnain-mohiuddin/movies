import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";

import CardDetails from "./CardDetails";
import CardRatings from "./CardRatings";
import { GET_CARD_IMAGE_LINK } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  const navigateToMediaDetails = () => {
    navigate(`/${movie.media_type}/${movie.id}`)
  }

  return (
    <>
      <Card sx={{ minWidth: 250, m: 1, borderRadius: 4, cursor: 'pointer' }} onClick={navigateToMediaDetails}>
        <CardMedia
          component="img"
          alt="Movie Image"
          image={GET_CARD_IMAGE_LINK(movie.backdrop_path)}
        />
        <CardDetails
          movieName={movie.title || movie.name}
          releaseDate={movie.first_air_date || movie.release_date}
        />
        <CardRatings averageScore={movie.vote_average} />
      </Card>
    </>
  );
};

export default MovieCard;
