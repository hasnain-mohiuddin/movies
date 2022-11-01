import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import { GRAY9, NEVADA } from "constants/colors";
import Pagination from "components/shared/PaginationComponent";
import MovieCard from "./MovieCard/MovieCard";

const MoviesGridList = ({
  moviesList,
  mediaCount,
  onHandleChange,
  title,
  mediaType,
}) => {
  return moviesList.length > 0 ? (
    <Container
      sx={{ backgroundColor: GRAY9, paddingBottom: 3 }}
      maxWidth={false}
    >
      <Container>
        <Typography
          gutterBottom
          variant="h4"
          p={2}
          fontSize={"2rem"}
          sx={{
            color: NEVADA,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
          <Grid container direction="row" spacing={4}>
            {moviesList.map((movie) => (
              <Grid key={movie.id} item xs={3}>
                <MovieCard movie={movie} mediaType={mediaType} />
              </Grid>
            ))}
          </Grid>
          {mediaCount > 1 && (
            <Pagination pageCount={mediaCount} onChange={onHandleChange} />
          )}
        </Box>
      </Container>
    </Container>
  ) : (
    <Box>
      <Typography textAlign={'center'} variant="h4">No Results Found</Typography>
    </Box>
  );
};

export default MoviesGridList;
