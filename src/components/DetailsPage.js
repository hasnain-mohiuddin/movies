import { Divider } from "@mui/material";

import MovieDetails from "./MoviesDetails";
import MovieReviews from "./MovieReviews";

const DetailsPage = () => {
  return (
    <>
      <MovieDetails />
      <Divider />
      <MovieReviews />
    </>
  );
};

export default DetailsPage;
