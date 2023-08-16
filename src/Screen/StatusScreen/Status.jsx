import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import StatusBox from "../../Components/Common/StatusBox";
import socketClient from "../../services/socketClient";

export default function Status() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const [uptimeChecks, setUptimeCheck] = useState();

  socketClient.on("currentUptimeChecks", (newUptimeCheck) => {
    setUptimeCheck(newUptimeCheck);
  });
  useEffect(() => {}, [uptimeChecks]);

  return (
    <Grid
      container
      paddingY={"30px"}
      spacing={2}
      backgroundColor={colors.primary[500]}
      display={"flex"}
      justifyContent={"center"}
    >
      {uptimeChecks
        ? uptimeChecks.map((check) => (
            <StatusBox data={check} key={check._id} />
          ))
        : null}
    </Grid>
  );
}
