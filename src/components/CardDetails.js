import React from "react";
import { CardContent, Typography } from "@mui/material";

const CardDetails = ({ movieName, releaseDate }) => {
  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }
  
  return (
    <CardContent>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        {truncate(movieName, 30)}
      </Typography>
      <Typography variant="p" color="text.secondary">
        {releaseDate}
      </Typography>
    </CardContent>
  );
};
export default CardDetails;
