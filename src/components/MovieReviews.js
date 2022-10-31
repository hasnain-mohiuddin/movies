import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import { fetchMovieReviews } from "../services/moviesService";
import MovieReviewCard from "./MovieReviewCard";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    getMovieReviews();
  }, []); // eslint-disable-line

  const getMovieReviews = async () => {
    try {
      const { data } = await fetchMovieReviews(params.id);
      setReview(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container sx={{ mx: 10, my: 5 }}>
      <Typography variant="p" fontSize={25} fontWeight="bold">
        Reviews ({reviews ? reviews.length : 0})
      </Typography>
      {reviews.length > 0 ? (
        <Container>
          {reviews.map((review) => (
            <MovieReviewCard key={review.id} review={review} />
          ))}
        </Container>
      ) : (
        <Typography variant="h4" sx={{ my: 5, textAlign: "center" }}>
          No Reviews Yet
        </Typography>
      )}
    </Container>
  );
};

export default MovieReviews;
