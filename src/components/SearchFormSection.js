import React from "react";
import { Container } from "@mui/material";
import MoviesFormHeader from "./MoviesFormHeader";
import MovieSearchForm from "./MovieSearchForm";
import { DARK_GREY_HEXA } from "../utils/colors";

const SearchFormSection = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: DARK_GREY_HEXA, pb: 6 }}>
      <MoviesFormHeader />
      <MovieSearchForm />
    </Container>
  );
};

export default SearchFormSection;
