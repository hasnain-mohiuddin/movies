import { Divider } from "@mui/material";

import MovieDetails from "../../components/MoviesDetails";
import MovieReviews from "../../components/MovieReviews";
import RateMedia from "../../components/RateMedia";

const DetailsPage = () => {
  return (
    <>
      <MovieDetails />
      <Divider />
      <RateMedia />
      <Divider />
      <MovieReviews />
    </>
  );
};

export default DetailsPage;
