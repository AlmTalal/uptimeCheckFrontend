import { Box } from "@mui/material";
import { tokens } from "../theme";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme.js";
import Navbar from "./Components/Navbar";
import StatusScreen from "./Screen/StatusScreen/StatusScreen";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./Screen/Login/LoginScreen";

function App() {
  const [theme, colorMode] = useMode();

  const colors = tokens(theme.pallete.mode);
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Box backgroundColor={colors.primary[500]} height={"100%"}>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" Component={StatusScreen} />
                <Route path="/login" Component={LoginScreen} />
              </Routes>
            </main>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
