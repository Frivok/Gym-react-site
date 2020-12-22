import * as React from "react";
import { Zoom, useScrollTrigger } from "@material-ui/core";

const style = {
  position: "fixed",
  bottom: "50px",
  right: "100px",
  zIndex: "99",
};

const BackToTop = ({ children }) => {
  const trigger = useScrollTrigger();

  //It uses JavaScript to target an ID. Visitor click the BackToTop Button, It’ll scroll to this ID.
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={style}>
        {children}
      </div>
    </Zoom>
  );
};

export default BackToTop;
