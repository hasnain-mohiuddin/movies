import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import UserContext from "../context/userContext";
import { APP_TITLE } from "../utils/constants";
import { TEAL_HEXA, NAVY_BLUE_HEXA } from "../utils/colors";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  navbar: {
    display: 'flex', 
    justifyContent: "space-between",
    flexGrow: 1
  }
}));

function Navbar() {
  const classes = useStyles();
  const [user] = useContext(UserContext);

  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: NAVY_BLUE_HEXA}}>
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Typography
          variant="h4"
          fontFamily="Raleway, Arial"
          sx={{
            color: TEAL_HEXA,
            mb: "0px",
          }}
        >
          {APP_TITLE}
        </Typography>
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
              <Link onClick={handleSignout} className={classes.link}>
                Sign Out
              </Link>
            )}
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
