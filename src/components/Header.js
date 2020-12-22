import * as React from "react";
import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Fab,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Facebook from "@material-ui/icons/Facebook";
import SideDrawer from "./Drawer";
import Button from "@material-ui/core/Button/Button";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  buttons: {
    color: "white",
    margin: "3px",
  },
});

const navLinks = [
  { title: `ACCUEIL`, path: `/` },
  { title: `NOTRE EQUIPE`, path: `/equipe` },
  { title: `NOS TARIFS`, path: `/tarifs` },
  { title: `CONTACT`, path: `/contact` },
];

const Header = () => {
  const classes = useStyles();

  const redirectToFacebook = () => {
    window.location.href = "https://facebook.com/components/links/";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden smUp>
          <SideDrawer navLinks={navLinks} />
        </Hidden>

        <Typography variant="h6" className={classes.title}>
          AirFitness
        </Typography>

        <Hidden xsDown>
          {navLinks.map(({ title, path }) => (
            <Link to={path} key={title}>
              <Button className={classes.buttons}>{title}</Button>
            </Link>
          ))}
        </Hidden>

        <Toolbar id="back-to-top" />
        <BackToTop>
          <Fab color="primary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </BackToTop>

        <IconButton
          onClick={redirectToFacebook}
          edge="start"
          color="inherit"
          aria-label="home"
        >
          <Facebook fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
