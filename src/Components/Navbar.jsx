import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { tokens, ColorModeContext } from "../../theme";
import { useTheme } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import { useAuth } from "../Contexts/AuthProvider";
import { Typography } from "@mui/material";

export default function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const colorMode = useContext(ColorModeContext);
  const hasAuth = useAuth();

  return (
    <AppBar position="static">
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        backgroundColor={colors.primary[500]}
        height={"80px"}
      >
        <Typography
          variant="h3"
          fontWeight={"bold"}
          onClick={() =>
            window.open("https://talal-dev.onrender.com/", "_blank")
          }
          sx={{ cursor: "pointer" }}
        >
          Talal.dev
        </Typography>

        <Box
          width={"80px"}
          height={"80px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {theme.pallete.mode === "dark" ? (
            <LightModeIcon
              style={{
                color: colors.secondary[400],
                width: "30%",
                height: "30%",
              }}
              onClick={colorMode.toggleColorMode}
            />
          ) : (
            <DarkModeIcon
              style={{
                color: colors.secondary[400],
                width: "30%",
                height: "30%",
              }}
              onClick={colorMode.toggleColorMode}
            />
          )}
          {hasAuth ? (
            <AddIcon
              style={{
                color: colors.secondary[400],
                width: "40%",
                height: "40%",
              }}
              onClick={() => {
                () => console.log("clicked");
              }}
            />
          ) : null}
        </Box>
      </Box>
    </AppBar>
  );
}
