import React, { useMemo, useState } from "react";
import { Button, Container } from "@mui/material";

import MovieGenres from "./MovieGenres";
import { ORANGE_HEXA } from "../constants/colors";
import MoviesGridList from "./MoviesGridList";
import { SEARCH_MOVIE } from "../constants/constants";
import MovieYearDropdown from "./MovieYearDropdown";
import { fetchFilteredMedia } from "../services/moviesService";
import SelectMediaType from "./SelectMediaType";
import { searchOptions } from "../constants/searchOptions";

const MovieSearchForm = () => {
  const [genresType, setGenresType] = useState("");
  const [selectedYear, setSelectedYear] = useState(new Date());
  const [selectedMediaType, setSelectedMediaType] = useState(searchOptions);
  const [filterMedia, setFilterMedia] = useState([]);

  const isSearchDisabled = useMemo(
    () => !genresType || !selectedYear || !selectedMediaType,
    [genresType, selectedMediaType, selectedYear]
  );

  const handleSubmitForm = async () => {
    const year = selectedYear.toString().split(" ")[3];
    try {
      selectedMediaType.map(async (media) => {
        const { data } = await fetchFilteredMedia(media, year, genresType);
        setFilterMedia([...filterMedia, ...data.results]);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const formSubmitButton = () => {
    return (
      <Button
        variant="outlined"
        disabled={isSearchDisabled}
        color="inherit"
        size="large"
        sx={{
          backgroundColor: ORANGE_HEXA,
          p: 2,
          fontWeight: "bold",
          fontSize: "15px",
          borderRadius: "20px",
        }}
        onClick={handleSubmitForm}
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
          <MovieGenres
            genresType={genresType}
            setGenresType={setGenresType}
            setFilterMedia={() => setFilterMedia([])}
          />
          <MovieYearDropdown
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            setFilterMedia={() => setFilterMedia([])}
          />
          <SelectMediaType
            selected={selectedMediaType}
            setSelected={setSelectedMediaType}
            setFilterMedia={() => setFilterMedia([])}
          />
        </Container>
        <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {formSubmitButton()}
        </Container>
      </form>
      {filterMedia ? <MoviesGridList moviesList={filterMedia} /> : null}
    </>
  );
};

export default MovieSearchForm;
