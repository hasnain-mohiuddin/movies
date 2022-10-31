import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import { fetchMovieReviews } from "../services/moviesService";
import MovieReviewCard from "./MovieReviewCard";
import PaginationComponent from "./PaginationComponent";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReview] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getMovieReviews(1);
  }, []); // eslint-disable-line

  const getMovieReviews = async (pageNumber) => {
    try {
      const { data } = await fetchMovieReviews(params.id, pageNumber);
      setPageCount(data.total_pages);
      setReview(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event, value) => {
    getMovieReviews(value);
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
          {pageCount > 1 && (
            <PaginationComponent
              pageCount={pageCount}
              onChange={handleChange}
            />
          )}
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
