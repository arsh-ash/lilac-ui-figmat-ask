import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import { Call, Email, LocationOn, ArrowDropDown } from "@mui/icons-material";

const NavBar = () => {
  return (
    <AppBar component="nav"  position="static">
      <Container maxWidth="xxl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-Between" }}>
          <Box className="nav-start" display="flex">
            <Box display="flex" alignItems="center">
              <Call fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body1">+221 33 66 22</Typography>
            </Box>
            <Box display="flex" alignItems="center" ml={4}>
              <Email fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body1">support@elextra.io</Typography>
            </Box>
          </Box>
          <Box className="nav-end" display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <LocationOn fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body1">Locations</Typography>
            </Box>
            <Divider
              orientation="vertical"
              // variant="middle"
              sx={{ borderRightWidth: "2px", mx: 4 }}
              flexItem
              color="#fff"
            />
            <Box display="flex" alignItems="center">
              <Typography variant="body1">$ Dollar (US)</Typography>
              <ArrowDropDown />
            </Box>
            <Box display="flex" alignItems="center" ml={2}>
              <Typography variant="body1">EN</Typography>
              <ArrowDropDown />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
