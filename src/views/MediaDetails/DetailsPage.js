import { Divider } from "@mui/material";

import MovieDetails from "../../components/MediaDetails/MoviesDetails";
import MovieReviews from "../../components/MediaDetails/MovieReviews";
import RateMedia from "../../components/MediaDetails/RateMedia";

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
