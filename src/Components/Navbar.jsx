import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { tokens, ColorModeContext } from "../../theme";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const colorMode = useContext(ColorModeContext);

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
        <Box
          onClick={() =>
            window.open(
              "https://medium.com/@alamtalal004/how-to-do-a-page-that-checks-the-current-status-of-your-pages-and-apis-with-mongo-sockets-and-gcc-bc876193a24",
              "_blank"
            )
          }
          sx={{ cursor: "pointer" }}
        >
          <Typography
            color={colors.secondary[500]}
            variant="h4"
            fontWeight={"bold"}
          >
            About This Project
          </Typography>
        </Box>
        <Box
          width={"80px"}
          height={"80px"}
          display={"flex"}
          alignItems={"center"}
          onClick={colorMode.toggleColorMode}
        >
          {theme.pallete.mode === "dark" ? (
            <LightModeIcon
              style={{
                color: colors.secondary[400],
                width: "30%",
                height: "30%",
              }}
            />
          ) : (
            <DarkModeIcon
              style={{
                color: colors.secondary[400],
                width: "30%",
                height: "30%",
              }}
            />
          )}
        </Box>
      </Box>
    </AppBar>
  );
}
//sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
