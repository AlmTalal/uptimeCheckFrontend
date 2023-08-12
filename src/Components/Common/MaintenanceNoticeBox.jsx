import { Box, Typography, colors } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";

export default function MaintenanceNoticeBox({ children }) {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box
      margin={"15px"}
      borderRadius={"10px"}
      backgroundColor={"#c69035"}
      width={"90%"}
      height={"auto"}
      padding={"10px"}
    >
      <Typography variant="h5" color={"white"}>
        {children}
      </Typography>
    </Box>
  );
}
