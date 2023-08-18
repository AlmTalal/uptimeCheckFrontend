import { Alert } from "@mui/material";
import React from "react";

export default function Alerts({ children, type, handleClose }) {
  return (
    <Alert severity={type} onClose={handleClose}>
      {children}
    </Alert>
  );
}
