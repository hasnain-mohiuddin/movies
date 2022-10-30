import React from "react";
import { CardContent, Typography } from "@mui/material";

const CardDetails = ({ movieName, releaseDate }) => {
  return (
    <CardContent>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        {movieName}
      </Typography>
      <Typography variant="p" color="text.secondary">
        {releaseDate}
      </Typography>
    </CardContent>
  );
};
export default CardDetails;
