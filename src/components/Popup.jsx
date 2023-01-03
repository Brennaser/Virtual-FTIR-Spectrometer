import React, { useState } from "react";
import { Dialog } from "@mui/material";

// style
import "../style/components/Popup.css";

// this component is used to display popup overlays for the instrument and certain menu items
export default function Popup({ label, title, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="popup-button"
        onClick={() => {
          setOpen(true);
        }}
      >
        {label}
      </button>
      <Dialog
        className="popup"
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <h2>{title}</h2>
        {text}
      </Dialog>
    </div>
  );
}
