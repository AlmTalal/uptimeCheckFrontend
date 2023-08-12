import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";

export default function StatusBox({ data }) {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const { checkedStatus, name } = data;

  const handleBoxRedirect = () => {
    if (data.checkedUrl) {
      window.open(data.checkedUrl, "_blank");
    }
  };

  const getText = () => {
    return checkedStatus === "1"
      ? "The service is runing"
      : checkedStatus === "0"
      ? "The service might fail"
      : "The service is down";
  };

  const getColor = () => {
    return checkedStatus === "1"
      ? "green"
      : checkedStatus === "0"
      ? "yellow"
      : "red";
  };

  return (
    <Grid item xs={10} md={5} backgroundColor={colors.primary[500]}>
      <Box
        backgroundColor={colors.primary[500]}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        padding={"10px"}
        height={"150px"}
        borderRadius={2}
        border={3}
        borderColor={getColor}
        sx={{ cursor: "pointer" }}
        onClick={handleBoxRedirect}
      >
        <Typography
          variant={"h6"}
          fontWeight={"bold"}
          color={colors.secondary[500]}
        >
          {name}
        </Typography>
        {data.checkedUrl ? (
          <Typography
            variant={"h6"}
            fontWeight={"bold"}
            color={colors.secondary[500]}
          >
            {data.checkedUrl}
          </Typography>
        ) : null}
        <Box
          height={"25px"}
          width={"55%"}
          backgroundColor={getColor}
          display={"flex"}
          alignItems={"center"}
          padding={"5px"}
          borderRadius={"3px"}
        >
          <Typography fontWeight={"bold"} color={"white"}>
            {getText()}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
