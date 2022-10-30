import React from "react";
import { Container,Typography } from "@mui/material";
import {APP_TITLE} from "../utils/constants"
import { NAVY_BLUE_HEXA,TEAL_HEXA } from "../utils/colors";

const Navbar = () => {
  return (
    <Container
      sx={{ backgroundColor: NAVY_BLUE_HEXA, maxWidth: "unset" }}
      maxWidth={false}
    >
      <Typography
        gutterBottom
        variant="h4"
        fontFamily="Raleway, Arial"
        p={2}
        sx={{
          color: TEAL_HEXA,
          mb: "0px",
        }}
      >
        {APP_TITLE}
      </Typography>
    </Container>
  );
};

export default Navbar;