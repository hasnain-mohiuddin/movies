import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

import { fetchMovieReviews } from "../services/moviesService";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    getMovieReviews();
  }, []);

  const getMovieReviews = async () => {
    const { data } = await fetchMovieReviews(params.id);
    setReview(data.review);
  };

  return (
    <Container sx={{ mx: 10, my: 5}}>
      <Typography variant="p" fontSize={25} fontWeight='bold'>
        Reviews ({reviews ? reviews.length : 0})
      </Typography>
      {reviews ? (
        <Container>
          <Box></Box>
        </Container>
      ) : (
        <Typography variant="h4" sx={{ my: 5, textAlign: 'center'}}>No Reviews Yet</Typography>
      )}
    </ Container>
  );
};

export default MovieReviews;
