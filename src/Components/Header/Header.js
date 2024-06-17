import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  ListItem,
  List,
  ListItemText,
  Divider,
  Drawer,
  styled,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import RentCarIcon from "../../Assests/Icons/RentCarIcon.png";

const drawerWidth = "9.375rem"; // Convert 150px to rem
const navItems = ["Home", "About", "Contact"];
const address = ["/", "/aboutus", "/contactus"];

const CustomButton = styled("a")(({ theme, active }) => ({
  width: "7.8125rem",
  height: "2.25rem",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: active ? 700 : 400,
  fontSize: "1.5rem",
  lineHeight: "1.25rem",
  color: "white",
  flex: "none",
  order: 0,
  flexGrow: 0,
  marginRight: "3.75rem",
  textDecoration: "none",
  "&:hover": {
    fontWeight: 600,
  },
}));

const DrawerButton = styled("a")({
  width: "7.8125rem", // Convert 125px to rem
  height: "2.25rem", // Convert 36px to rem
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.5rem", // Convert 24px to rem
  lineHeight: "2.25rem", // Convert 36px to rem
  color: "black",
  flex: "none",
  order: 0,
  flexGrow: 0,
  marginRight: "3.75rem", // Convert 60px to rem
  textDecoration: "none",
  "&:hover": {
    fontWeight: 600,
  },
});

const StyleHeader = styled(AppBar)({
  background: "#a15d1a",
  width: "100%",
  transition: "all 0.5s",
  boxShadow: "none",
  height: "auto",
});

const Cursive = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontFamily: "Satisfy",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "2.5rem", // Convert 48px to rem
  lineHeight: "4.5rem", // Convert 69px to rem
  letterSpacing: "-0.3px",
  color: "white",
  marginLeft: "6.25rem", // Convert 100px to rem
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
  },
}));

const RentVBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "12.4375rem",
}));

const IconRntV = styled("img")(({ theme }) => ({
  position: "relative",
  top: "-0.8rem",
  [theme.breakpoints.down("md")]: {
    right: "7rem",
  },
}));

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Cursive sx={{ color: "black" }}>RentV</Cursive>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <DrawerButton sx={{ textAlign: "left", marginLeft:"2rem" }} href={address[i]}>
              <ListItemText primary={item} />
            </DrawerButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <StyleHeader component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <Box display={"flex"}>
              <Cursive>RentV</Cursive>
              <RentVBox height={"100px"} width={"auto"}>
                <IconRntV src={RentCarIcon} />
              </RentVBox>
            </Box>
          </a>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <CustomButton
                key={item}
                href={address[i]}
                active={location.pathname === address[i]}
              >
                {item}
              </CustomButton>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyleHeader>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </>
  );
};

export default Header;
