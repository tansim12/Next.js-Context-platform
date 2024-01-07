"use client"
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";
import HomePageNavLink from "./HomePageNavLink";



import { Button } from "@mui/material";
import useAuthContext from "@/Hooks/AuthContextHooks/useAuthContext";

import Link from "next/link";
import LogOutAndDashboard from "./LogOutAndDashboard";

  

const Navbar = () => {
    const authContext = useAuthContext();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "transparent", color: "black" }}
        className="navbarBlur"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
               
                
              }}
            >
              <img
               style={{width:"50%"}}
                src="https://especio.themerex.net/splash/assets/img/logo.png"
                alt=""
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {/* sm size menu bar or navLink */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* mobile device  */}
                <HomePageNavLink></HomePageNavLink>
              </Menu>
            </Box>

            <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           
               <img
               style={{width:"30%" ,}}
                src="https://especio.themerex.net/splash/assets/img/logo.png"
                alt=""
              />
            </Typography>
            {/* large device  */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <HomePageNavLink></HomePageNavLink>
            </Box>

            {/* profile section  */}

            {!authContext?.user ? (
              <Link href={"/login"}>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    ":hover": {
                      bgcolor: "unset",
                    },
                  }}
                  color="secondary"
                >
                  Login
                </Button>
              </Link>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: 1,
                      gap: 1,
                    }}
                  >
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={authContext?.user?.photoURL} />
                   
                    </IconButton>
                    <Typography variant="body1">
                      {authContext?.user?.displayName.slice(0, 8)}
                    </Typography>
                  </Box>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <LogOutAndDashboard></LogOutAndDashboard>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
