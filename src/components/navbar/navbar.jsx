import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/logo 1.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "300px" }}
    >
      <img src={logo} alt="" style={{ width: "120px", margin: "20px auto" }} />
      <List>
        {["Home", "Pricing", "FAQ", "Blog", "Sign Up", "Login"].map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog");
  };
  const goToHome = () => {
    navigate("/");
  };

  // const inputRef = useRef("");

  return (
    <Box sx={{}}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              display: { xs: "100px" },
            }}
          >
            <img src={logo} alt="" style={{ width: "150px" }} />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              mr: 3,
            }}
          >
            <Button color="inherit" onClick={goToHome}>
              Home
            </Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">FAQ</Button>
            <Button color="inherit" onClick={goToBlog}>
              Blog
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <Button variant="contained" color="primary">
              SIGN UP/Login
            </Button>
          </Stack>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": { width: "300px" },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
