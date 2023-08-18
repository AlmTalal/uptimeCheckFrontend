import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { tokens, ColorModeContext } from "../../../theme";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import styles from "./styles";

export default function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static">
      <Box sx={styles.navBarBox} backgroundColor={colors.primary[500]}>
        <Typography
          variant="h3"
          fontWeight={"bold"}
          sx={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://talal-dev.onrender.com/", "_blank")
          }
        >
          Talal.dev
        </Typography>

        <Box sx={styles.iconBox}>
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
        </Box>
      </Box>
    </AppBar>
  );
}
