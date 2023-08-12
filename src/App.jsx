import { Box } from "@mui/material";
import { tokens } from "../theme";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme.js";
import Navbar from "./Components/Navbar";
import Status from "./Screen/Status";
import WebMaintanaceAnouncements from "./Screen/WebMaintanaceAnouncements";

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
              <Status />
              <WebMaintanaceAnouncements />
            </main>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
