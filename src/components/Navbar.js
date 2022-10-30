import React, { useContext } from "react";
import { Button, Container, Typography } from "@mui/material";

import UserContext from "../context/userContext";
import { APP_TITLE } from "../utils/constants";
import { NAVY_BLUE_HEXA, TEAL_HEXA } from "../utils/colors";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ user ] = useContext(UserContext);

  const handleSignout = () => {
    auth.signOut();
  };

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
      {!user && <Link to={'/signup'}>Sign Up</Link>}
      {!user && <Link to={'/signin'}>Sign In</Link>}
      {user && <Button onClick={handleSignout}>Sign Out</Button>}
    </Container>
  );
};

export default Navbar;
