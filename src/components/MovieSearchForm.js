import React, { useState } from "react";
import { Button, Container } from "@mui/material";

import MovieGenres from "./MovieGenres";
import { ORANGE_HEXA } from "../utils/colors";
import MoviesGridList from "./MoviesGridList";
import ApiKeyTestField from "./ApiKeyTestField";
import { SEARCH_MOVIE } from "../utils/constants";
import MovieYearDropdown from "./MovieYearDropdown";
import { fetchFilteredMovies } from "../services/moviesService";

const MovieSearchForm = () => {
  const [genresType, setGenresType] = useState("");
  const [selectedYear, setSelectedYear] = useState(new Date());
  const [apiKey, SetApiKey] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);

  const handleSubmitForm = async (type, year, apiKey) => {
    const { data } = await fetchFilteredMovies(apiKey, year, type);
    setFilterMovies(data.results);
  };

  const formSubmitButton = () => {
    return (
      <Button
        variant="outlined"
        disabled={!genresType || !selectedYear || !apiKey}
        color="inherit"
        size="large"
        sx={{
          backgroundColor: ORANGE_HEXA,
          p: 2,
          fontWeight: "bold",
          fontSize: "15px",
          borderRadius: "20px",
        }}
        onClick={() =>
          handleSubmitForm(
            genresType,
            selectedYear.toString().split(" ")[3],
            apiKey
          )
        }
      >
        {SEARCH_MOVIE}
      </Button>
    );
  };

  return (
    <>
      <form>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <MovieGenres genresType={genresType} setGenresType={setGenresType} />
          <MovieYearDropdown
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
          <ApiKeyTestField SetApiKey={SetApiKey} />
        </Container>
        <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {formSubmitButton()}
        </Container>
      </form>
      {filterMovies ? <MoviesGridList moviesList={filterMovies} /> : null}
    </>
  );
};

export default MovieSearchForm;
