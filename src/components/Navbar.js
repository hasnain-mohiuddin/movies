import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import { auth } from "../firebase";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { APP_TITLE } from "../constants/constants";
import DrawerComponent from "./DrawerComponent";
import UserContext from "../context/userContext";
import { NAVY_BLUE_HEXA, LIGHT_GREY_HEXA } from "../constants/colors";
import urls from "../constants/urls";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const user = useContext(UserContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: NAVY_BLUE_HEXA }}>
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Link to={urls.dashboard} className={classes.logo}>
          {APP_TITLE}
        </Link>
        {isMobile ? (
          user && <DrawerComponent user={user} />
        ) : (
          <div className={classes.navlinks}>
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
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
