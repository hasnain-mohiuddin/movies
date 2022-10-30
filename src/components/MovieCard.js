import React, { useState } from "react";
import { Card, CardMedia, CardActions, Button } from "@mui/material";
import CardDetails from "./CardDetails";
import CardRatings from "./CardRatings";
import { GET_CARD_IMAGE_LINK, REVIEWS } from "../utils/constants";
import ReviewsModal from "./ReviewsModal";
import axios from "axios";

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);
   
    
  const getMovieReviews = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=342c371f5f83eb671d3747779a0bdfc2&language=en-US&page=1`
    );
    setMovieReviews(data.results);
    setOpen(true)
  };

  const handleModalOpen = async() => {
    await getMovieReviews()
  };

  console.log({movieReviews});

  return (
    <>
      <Card sx={{ minWidth: 200, m: 1, borderRadius: 4 }}>
        <CardMedia
          component="img"
          alt="Movie Image"
          image={GET_CARD_IMAGE_LINK(movie.backdrop_path)}
        />
        <CardDetails
          movieName={movie.title}
          releaseDate={movie.first_air_date}
        />
        <CardRatings averageScore={movie.vote_average} />
        <CardActions>
          <Button size="small" onClick={()=>handleModalOpen()}>
            {REVIEWS}
          </Button>
        </CardActions>
      </Card>
      <ReviewsModal modalOpen={open} setModalOpen={setOpen} movie={movie}/>
    </>
  );
};

export default MovieCard;
