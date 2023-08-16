import { Alert } from "@mui/material";
import React from "react";

export default function Alerts({ children, type }) {
  return <Alert severity={type}>{children}</Alert>;
}
