import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const tokens = (mode) => ({
  ...(mode == "dark"
    ? {
        primary: {
          100: "#cfcfcf",
          200: "#a0a0a0",
          300: "#707070",
          400: "#414141",
          500: "#121212",
          600: "#0e0e0e",
          700: "#0a0a0a",
          800: "#070707",
          900: "#030303",
        },
        secondary: {
          100: "#313031",
          200: "#939192",
          300: "#626161",
          400: "#c4c2c2",
          500: "#FFF",
          600: "#f7f5f5",
          700: "#f9f7f8",
          800: "#fbfafa",
          900: "#fdfcfd",
        },
      }
    : {
        primary: {
          100: "#313031",
          200: "#939192",
          300: "#626161",
          400: "#c4c2c2",
          500: "#FFF",
          600: "#f7f5f5",
          700: "#f9f7f8",
          800: "#fbfafa",
          900: "#fdfcfd",
        },
        secondary: {
          100: "#cfcfcf",
          200: "#a0a0a0",
          300: "#707070",
          400: "#414141",
          500: "#121212",
          600: "#0e0e0e",
          700: "#0a0a0a",
          800: "#070707",
          900: "#030303",
        },
      }),
});

//MUI theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    pallete: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secundary: {
              main: colors.secondary[500],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secundary: {
              main: colors.secondary[500],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },

    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 12,
      color: mode === "dark" ? "#FFF" : "black",
      h1: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 40,
        color: mode === "dark" ? "#FFF" : "black",
      },
      h2: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 32,
        color: mode === "dark" ? "#FFF" : "black",
      },
      h3: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 24,
        color: mode === "dark" ? "#FFF" : "black",
      },
      h4: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 20,
        color: mode === "dark" ? "#FFF" : "black",
      },
      h5: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 16,
        color: mode === "dark" ? "#FFF" : "black",
      },
      h6: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 14,
        color: mode === "dark" ? "#FFF" : "black",
      },
    },
  };
};

//context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
