import React, { useMemo, useState } from "react";
import { Button, Container } from "@mui/material";

import MediaGenres from "./MediaGenres";
import MoviesGridList from "./MoviesGridList";
import { SEARCH_MOVIE } from "../../constants/constants";
import MovieYearDropdown from "./MovieYearDropdown";
import { fetchFilteredMedia } from "../../services/moviesService";
import SelectMediaType from "./SelectMediaType";
import { searchOptions } from "../../constants/searchOptions";
import { BLACK, WIHITE_HEXA } from "../../constants/colors";

const MovieSearchForm = () => {
  const [genresType, setGenresType] = useState("");
  const [selectedYear, setSelectedYear] = useState(new Date());
  const [selectedMediaType, setSelectedMediaType] = useState(
    searchOptions[0].value
  );
  const [filterMedia, setFilterMedia] = useState([]);
  const [mediaCount, setMediaCount] = useState(0);

  const isSearchDisabled = useMemo(
    () => !genresType || !selectedYear || !selectedMediaType,
    [genresType, selectedMediaType, selectedYear]
  );

  const handleSubmitForm = async ({ page = 1 }) => {
    const year = selectedYear.toString().split(" ")[3];
    try {
      const { data } = await fetchFilteredMedia(
        selectedMediaType,
        year,
        genresType,
        page
      );
      setFilterMedia([...data.results]);
      setMediaCount(data.total_pages);
      // let pagesCount = 0;
      // selectedMediaType.map(async (media, idx) => {
      //   const { data } = await fetchFilteredMedia(
      //     media,
      //     year,
      //     genresType,
      //     page
      //   );
      //   setFilterMedia([...filterMedia, ...data.results]);
      //   pagesCount += data.total_pages;
      //   if (idx - 1 === selectedMediaType) setMediaCount(pagesCount);
      // });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event, value) => {
    handleSubmitForm(value);
  };

  const formSubmitButton = () => {
    return (
      <Button
        variant="contained"
        disabled={isSearchDisabled}
        size="large"
        sx={{
          color: isSearchDisabled ? BLACK : WIHITE_HEXA,
          p: 2,
          borderRadius: 2,
          marginBottom: 3,
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
          <MediaGenres
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

      {/* <Box display={"flex"} flexDirection="column" alignItems={"center"}> */}
      <MoviesGridList
        moviesList={filterMedia}
        pageCount={mediaCount}
        handleChange={handleChange}
        title={SEARCH_MOVIE}
        mediaType={selectedMediaType}
      />
      {/* {mediaCount > 1 && <Pagination pageCount={mediaCount} onChange={handleChange} />} */}
      {/* </Box> */}
      {/* ) : null} */}
    </>
  );
};

export default MovieSearchForm;
