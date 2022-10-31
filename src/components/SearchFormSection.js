import React from "react";
import { Container } from "@mui/material";

import MovieSearchForm from "./MovieSearchForm";
import { BLACK } from "../constants/colors";
import MoviesFormHeader from "./MoviesFormHeader";

const SearchFormSection = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: BLACK, pb: 6 }}>
      <MoviesFormHeader />
      <MovieSearchForm />
    </Container>
  );
};

export default SearchFormSection;
