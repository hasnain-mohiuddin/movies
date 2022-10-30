import React, { useContext } from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";

import UserContext from "../context/userContext";
import { APP_TITLE } from "../utils/constants";
import { NAVY_BLUE_HEXA, LIGHT_GREY_HEXA } from "../utils/colors";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { auth } from "../firebase";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontFamily: "Raleway, Arial",
    color: LIGHT_GREY_HEXA,
    textDecoration: "none",
    fontSize: "2.5rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: LIGHT_GREY_HEXA,
    },
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  const [user] = useContext(UserContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: NAVY_BLUE_HEXA }}>
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Link to={"/"} className={classes.logo}>
          {APP_TITLE}
        </Link>
        <div className={classes.navlinks}>
          {!user && (
            <Link to={"/signup"} className={classes.link}>
              Sign Up
            </Link>
          )}
          {!user && (
            <Link to={"/signin"} className={classes.link}>
              Sign In
            </Link>
          )}
          {user && (
            <Button
              className={classes.link}
              sx={{ color: "white" }}
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign Out
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
