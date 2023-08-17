import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import React, { useEffect, useRef, useState } from "react";
import socket from "../../services/socketClient";
import { useNavigate } from "react-router-dom";
import Alerts from "../../Components/Common/Alerts";
import { useAuth, setAuth } from "../../Contexts/AuthProvider";
import styles from "./styles";

export default function LoginScreen() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const auth = useAuth();
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleAuth = setAuth();

  const submit = async (event) => {
    event.preventDefault();
    const user = {
      mail: emailRef.current.value,
      password: passwordRef.current.value,
    };
    //Call the event for authenticating on the server side
    socket.emit("authUser", user, handleAuthentication);
  };

  const handleAuthentication = (auth) => {
    const [isAuthed, token, error] = auth;
    if (isAuthed) {
      localStorage.setItem("token", token);
      handleAuth();
      navigate("/");
    } else {
      setError(error);
    }
  };

  useEffect(() => {
    auth ? navigate("/") : null;
  });

  return (
    <Box sx={styles.logingBackground}>
      <form onSubmit={submit}>
        <Box
          sx={styles.logingBox}
          border={3}
          borderColor={colors.secondary[500]}
        >
          <Typography variant={"h5"} fontWeight={"bold"} color={"black"}>
            Login
          </Typography>
          <TextField
            sx={{ width: "80%" }}
            id="standard-required"
            label="User"
            variant="standard"
            inputRef={emailRef}
            InputProps={{ style: { fontSize: "1rem" } }}
          />
          <TextField
            sx={{
              width: "80%",
            }}
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            InputProps={{ style: { fontSize: "1rem" } }}
            inputRef={passwordRef}
          />
          <Button sx={styles.loginBtn} type="submit">
            Login
          </Button>
          {error ? <Alerts type={"error"}>{error}</Alerts> : null}
        </Box>
      </form>
    </Box>
  );
}
