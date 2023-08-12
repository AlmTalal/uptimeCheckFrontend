import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import MaintenanceNoticeBox from "../Components/Common/MaintenanceNoticeBox";

export default function WebMaintanaceAnouncements() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box
      backgroundColor={colors.secondary[500]}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"25px 25px 0px 0px"}
      padding={"20px"}
    >
      <Typography variant="h1" fontWeight={"bold"} color={colors.primary[500]}>
        Maintenance Notices
      </Typography>

      <MaintenanceNoticeBox>
        The Talal's Portfolio Website is Gonna be Down on march 2024
      </MaintenanceNoticeBox>

      <MaintenanceNoticeBox>I need to implement :</MaintenanceNoticeBox>
      <MaintenanceNoticeBox>
        Admin Dashboard for creating or deleting new Metrics
      </MaintenanceNoticeBox>
      <MaintenanceNoticeBox>
        Authorization and Authentication for Sockets
      </MaintenanceNoticeBox>
      <MaintenanceNoticeBox>
        A Blog of how to create uptime Checks for the admin
      </MaintenanceNoticeBox>
      <MaintenanceNoticeBox>
        A blog of how the web page is working and why the sockets are or are not
        needed, it's gonna deppend on the requirments
      </MaintenanceNoticeBox>
    </Box>
  );
}
