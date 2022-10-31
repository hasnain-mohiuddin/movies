import React from "react";
import { Typography } from "@mui/material";

import { WHITE } from "../constants/colors";
import { FORM_HEADER_TITLE } from "../constants/constants";

const MoviesFormHeader = () => {
  return (
    <Typography
      gutterBottom
      variant="h3"
      p={2}
      sx={{
        color: WHITE,
      }}
    >
      {FORM_HEADER_TITLE}
    </Typography>
  );
};
export default MoviesFormHeader;
