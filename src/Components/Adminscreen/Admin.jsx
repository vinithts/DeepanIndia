import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FaSignOutAlt, FaBookReader, FaAddressCard } from "react-icons/fa";
import {
  MdOutlineViewHeadline,
  MdPermMedia,
  MdOutlinePreview,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import AddchartIcon from "@mui/icons-material/Addchart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { PiPlugsConnectedFill } from "react-icons/pi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Deepalogo from "../../assets/logos/logo-deepan1.png";
import styled from "styled-components";
import { useTheme, useMediaQuery } from "@mui/material";
import Cookies from "universal-cookie";

export const cookies = new Cookies();

const drawerWidth = 240;

const Admin = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md", "sx"));
  const location = useLocation();

  const headerTitle = useMemo(() => {
    const routeMap = {
      "/admin/slider": "Headers",
      "/admin/choose": "Choose",
      "/admin/wealth": "Wealth",
      "/admin/story": "Story",
      "/admin/about": "About",
      "/admin/card": "Card",
      "/admin/joiner": "Joiner",
      "/admin/socialmedia": "Social Media",
      "/admin/customerdetails": "Customer Data",
    };
    return routeMap[location.pathname] || "Admin Panel";
  }, [location.pathname]);

  const isAuthenticated = useMemo(() => {
    const token = cookies.get("user")?.userId;
    return Boolean(token);
  }, []);

  const allowMethod = () => {
    const token = cookies.get("user")?.userId;
    console.log("tokenn", token);

    if (!token) {
      navigate("/adminlogin");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    allowMethod();
  }, []);

  const drawerContent = (
    <Mobileadmin>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={Deepalogo} alt="Logo" />
        {isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        )}
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/slider"
            selected={location.pathname === "/admin/slider"}
          >
            <ListItemIcon className="icon">
              <AddchartIcon />
            </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="Headers" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/choose"
            selected={location.pathname === "/admin/choose"}
          >
            <ListItemIcon className="icon">
              <PsychologyAltIcon />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="Choose" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/wealth"
            selected={location.pathname === "/admin/wealth"}
          >
            <ListItemIcon className="icon">
              <AcUnitIcon />
            </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="wealth" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/story"
            selected={location.pathname === "/admin/story"}
          >
            <ListItemIcon className="icon">
              <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="story" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/about"
            selected={location.pathname === "/admin/about"}
          >
            <ListItemIcon className="icon">
              <FaBookReader />
            </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/card"
            selected={location.pathname === "/admin/card"}
          >
            <ListItemIcon className="icon">
              <FaAddressCard />
            </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="Card" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/joiner"
            selected={location.pathname === "/admin/joiner"}
          >
            <ListItemIcon className="icon">
              <PiPlugsConnectedFill />
            </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="Joiner" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/socialmedia"
            selected={location.pathname === "/admin/socialmedia"}
          >
            <ListItemIcon className="icon">
              <MdPermMedia />
            </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="Social Media" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/customerdetails"
            selected={location.pathname === "/admin/customerdetails"}
          >
            <ListItemIcon className="icon">
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ style: { color: "#0c1035" } }}  primary="CustomerData" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Mobileadmin>
  );

  return (
    <Adminpage>
      {isAuthenticated ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
              ml: isMobile ? 0 : `${drawerWidth}px`,
              background: "#ffffff",
            }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", height:"100px"}}>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography sx={{fontSize:"30px",fontWeight:700, color:"#0c1035"}} noWrap component="div">
                {headerTitle}
              </Typography>
              <div>
                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: "rgb(225, 35, 35)" }}>A</Avatar>
                </IconButton>
                <Menu
                  sx={{ top: "45px;" }}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem disabled>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", opacity: "1" }}
                    >
                      Admin
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                      variant="body2"
                      sx={{ color: "#0c1035", opacity: "1" }}
                    >
                      admin@gmail.com
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "#fa0001" }}
                    >
                      <FaSignOutAlt style={{ marginRight: "8px" }} />
                      Logout
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>

          <nav aria-label="admin drawer">
            <Drawer
              variant={isMobile ? "temporary" : "permanent"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  background: "#ffffff",
                  color: "#fff",
                },
              }}
            >
              {drawerContent}
            </Drawer>
          </nav>

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      ) : null}
    </Adminpage>
  );
};

export default Admin;

const Adminpage = styled.section``;
const Mobileadmin = styled.div`
  .icon {
    min-width: 50px;
    font-size: 22px;
    color: #0c1035;
  }
  img {
    width: 100%;
    text-align: center;
    /* padding: 10px; */
  }
  @media screen and (max-width: 600px) {
    .icon {
      color: #0c1035;
    }
    img {
      width: 85%;
    }
  }
`;
