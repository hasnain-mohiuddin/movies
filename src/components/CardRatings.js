import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Typography, Container, Rating } from "@mui/material";

import { GET_RATING_SATRS, GET_RATING_SCORE } from "../utils/helpers";

const CardRatings = ({
  averageScore,
  readOnly = true,
  setRating = () => {},
  size = "small",
}) => {
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
        value={readOnly ? GET_RATING_SATRS(averageScore) : averageScore}
        readOnly={readOnly}
        precision={0.5}
        size={size}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Typography variant="p" sx={{ fontWeight: "bold" }}>
        {readOnly && GET_RATING_SCORE(averageScore)}
      </Typography>
    </Container>
  );
};

export default CardRatings;
