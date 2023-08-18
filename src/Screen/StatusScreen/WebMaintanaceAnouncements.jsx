import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import MaintenanceNoticeBox from "../../Components/Common/MaintenanceNoticeBox";

export default function WebMaintanaceAnouncements() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box
      backgroundColor={colors.primary[500]}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"20px"}
      paddingBottom={"25px"}
    >
      <Typography
        variant="h1"
        fontWeight={"bold"}
        color={colors.secondary[500]}
        marginBottom={"10px"}
      >
        Maintenance Notices
      </Typography>

      <MaintenanceNoticeBox>
        The Talal's Portfolio Website is Gonna be Down on march 2024
      </MaintenanceNoticeBox>
      <MaintenanceNoticeBox>
        Made to fail Website is not gonna be alive anymore
      </MaintenanceNoticeBox>
    </Box>
  );
}
