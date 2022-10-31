import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Typography, Container, Rating } from "@mui/material";

import { GET_RATING_SATRS, GET_RATING_SCORE } from "../utils/constants";

const CardRatings = ({ averageScore }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      maxWidth={false}
    >
      <Rating
        name="text-feedback"
        value={GET_RATING_SATRS(averageScore)}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Typography variant="p" sx={{ fontWeight: "bold" }}>
        {GET_RATING_SCORE(averageScore)}
      </Typography>
    </Container>
  );
};

export default CardRatings;
