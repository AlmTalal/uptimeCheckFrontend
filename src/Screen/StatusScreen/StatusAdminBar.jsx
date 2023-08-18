import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthProvider";
import AddDialog from "../../Components/Common/AddDialog";
import Alerts from "../../Components/Common/Alerts";
import { Box, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import socket from "../../services/socketClient";

export default function StatusAdminBar() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  //Gives the Authorization status
  const hasAuth = useAuth();
  //For showing and setting the dialog
  const [addDialog, setAddDialog] = useState(false);

  const handleUptimeCheckAdd = () => {
    setAddDialog(true);
  };
  const closeDialog = () => {
    setAddDialog(false);
  };
  const handleAddSubmit = (newUptimeCheck) => {
    socket.emit(
      "createUptimeCheck",
      newUptimeCheck,
      localStorage.getItem("token"),
      handleResult
    );
    closeDialog();
  };
  const handleResult = (type, text) => {
    setAlert({ type: type, text: text });
  };
  const [alert, setAlert] = useState(false);

  const handleCloseAlert = () => {
    setAlert(false);
  };

  return (
    <>
      {hasAuth ? (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            marginBottom={"10px"}
          >
            <Button onClick={handleUptimeCheckAdd}>Add Uptime Check</Button>
            <Button onClick={() => console.log("Hello")}>
              Add Maintanace Anouncement
            </Button>
          </Box>

          {alert ? (
            <Alerts type={alert.type} handleClose={handleCloseAlert}>
              {alert.text}
            </Alerts>
          ) : null}

          <AddDialog
            open={addDialog}
            handleClose={closeDialog}
            handleSubmit={handleAddSubmit}
          />
        </Box>
      ) : null}
    </>
  );
}
