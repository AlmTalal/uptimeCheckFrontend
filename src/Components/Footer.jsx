import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <Box padding={"25px"} display={"flex"} justifyContent={"space-evenly"}>
        <Typography
          variant={"h5"}
          onClick={() => navigate("/login")}
          sx={{ cursor: "pointer" }}
        >
          Admin
        </Typography>
        <Typography
          variant={"h5"}
          onClick={() =>
            window.open("https://talal-dev.onrender.com/", "_blank")
          }
          sx={{ cursor: "pointer" }}
        >
          My Portfolio
        </Typography>
        <Typography
          variant={"h5"}
          onClick={() =>
            window.open(
              "https://medium.com/@alamtalal004/how-to-do-a-page-that-checks-the-current-status-of-your-pages-and-apis-with-mongo-sockets-and-gcc-bc876193a24",
              "_blank"
            )
          }
          sx={{ cursor: "pointer" }}
        >
          About this page
        </Typography>
      </Box>
    </footer>
  );
}
