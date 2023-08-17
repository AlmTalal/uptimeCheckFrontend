import { Box } from "@mui/material";
import { tokens } from "../theme";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme.js";
import Navbar from "./Components/Navbar/Navbar";
import StatusScreen from "./Screen/StatusScreen/StatusScreen";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./Screen/Login/LoginScreen";
import AuthProvider from "./Contexts/AuthProvider";
import { useAuth } from "./Contexts/AuthProvider";
import { useEffect } from "react";
import Footer from "./Components/Footer";

function App() {
  const [theme, colorMode] = useMode();
  const auth = useAuth();

  useEffect(() => {}, [auth]);

  const colors = tokens(theme.pallete.mode);
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Box backgroundColor={colors.primary[500]} height={"100%"}>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" Component={StatusScreen} />
                  <Route path="/login" Component={LoginScreen} />
                </Routes>
              </main>
              <Footer />
            </Box>
          </AuthProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
