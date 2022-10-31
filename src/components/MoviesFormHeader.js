import React from "react";
import { Typography } from "@mui/material";

import { ORANGE_HEXA } from "../utils/colors";
import { FORM_HEADER_TITLE } from "../utils/constants";

const MoviesFormHeader = () => {
  return (
    <Typography
      gutterBottom
      variant="h4"
      fontFamily="Raleway"
      p={2}
      sx={{
        color: ORANGE_HEXA,
      }}
    >
      {FORM_HEADER_TITLE}
    </Typography>
  );
};
export default MoviesFormHeader;
