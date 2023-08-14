import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { io } from "socket.io-client";
import StatusBox from "../../Components/Common/StatusBox";
const socket = io("https://uptime-check-backend.onrender.com");
//const socket = io("http://localhost:3001");

export default function Status() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const [uptimeChecks, setUptimeCheck] = useState();

  socket.on("currentUptimeChecks", (newUptimeCheck) => {
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
