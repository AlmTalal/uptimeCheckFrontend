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

  //Listens to changes in the Uptime Checks
  socketClient.on("currentUptimeChecks", (newUptimeCheck) => {
    setUptimeCheck(newUptimeCheck);
  });

  //Get the uptime Check the first time that the component is rendered
  const setChecks = (uptimeChecks) => {
    setUptimeCheck(uptimeChecks);
  };

  useEffect(() => {
    socketClient.emit("giveUptimeChecks", setChecks);
  }, [uptimeChecks]);

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
