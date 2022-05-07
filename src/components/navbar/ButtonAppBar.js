import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from '../../images/logo.jpg'
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <img src={logo} style={{ borderRadius:"50%", width: "5%" }} />
          <Typography variant="h5">GDSC</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
