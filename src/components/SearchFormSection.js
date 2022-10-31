import React from "react";
import { Container } from "@mui/material";

import MovieSearchForm from "./MovieSearchForm";
import { WIHITE_HEXA } from "../constants/colors";
import MoviesFormHeader from "./MoviesFormHeader";

const SearchFormSection = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: WIHITE_HEXA, pb: 6 }}>
      <MoviesFormHeader />
      <MovieSearchForm />
    </Container>
  );
};

export default SearchFormSection;
