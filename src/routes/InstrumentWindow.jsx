import React from "react";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { ReactComponent as Main } from "../components/svgs/ftir-main.svg";
import { imgSource, toolTips } from "../dictionaries/SVGLibrary";

import "../style/InstrumentWindow.css";

export default function InstrumentWindow() {
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState(null);

  const handleClick = (event) => {
    setToggled(!toggled);

    console.log(event.target.parentElement.id);

    if (
      event.target.parentElement.id === "instrument-window" ||
      event.target.parentElement.id === "ftir"
    ) {
      setElement(null);
    } else {
      setElement(event.target.parentElement.id);
    }
  };

  return (
    <div id="instrument-window">
      <Main id="instument" onClick={handleClick} />

      {element && (
        <Dialog className="popup" onClose={handleClick} open={toggled}>
          <h2>{toolTips[element].title}</h2>
          <img src={imgSource[element]} className="example-image" alt="" />
          <p>{toolTips[element].text}</p>
        </Dialog>
      )}
    </div>
  );
}
