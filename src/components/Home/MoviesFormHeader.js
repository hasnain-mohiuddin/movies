import React from "react";
import { Typography } from "@mui/material";

import { BLACK } from "constants/colors";
import { FORM_HEADER_TITLE } from "constants/constants";

const MoviesFormHeader = () => {
  return (
    <Typography
      gutterBottom
      variant="h4"
      p={2}
      sx={{
        color: BLACK,
      }}
    >
      {FORM_HEADER_TITLE}
    </Typography>
  );
};
export default MoviesFormHeader;
