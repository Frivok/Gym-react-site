import * as React from "react";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const classes = makeStyles({});

const Drawer = ({ navLinks }) => {
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const drawerList = (anchor) => <div className={classes.list}></div>;

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu />
      </IconButton>
    </React.Fragment>
  );
};

export default Drawer;
