import React from "react";
import {
  Box,
  TextField,
  Typography,
  styled,
  InputAdornment,
  IconButton,
  Divider,
  Grid,
  Container,
} from "@mui/material";
import RentCarIcon from "../../Assests/Icons/RentCarIcon.png";
import Send from "../../Assests/Icons/Send.webp";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D9D9D9",
    },
  },
});

const MainWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  backgroundColor: "#a15d1a",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    height: "auto",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "100px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
  },
}));

const RightWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 600px)": {
    // marginLeft: '10px',
    marginBottom: "20px",
  },
});

const Cursive = styled(Typography)({
  position: "relative",
  fontFamily: "Satisfy",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "3rem",
  letterSpacing: "-0.3px",
  color: "#FFFFFF",
  textAlign: "center",
  top: "-14px",
});

const RentVBox = styled(Box)({
  position: "absolute",
  left: "255px",
  "@media (max-width: 899px)": {
    left: "150px",
  },
});

const IconRntV = styled("img")({
  position: "relative",
  top: "-24px",
  right: "25px",
  // "@media (max-width: 899px)": {
  //   right: "130px",
  // },
});

const Address = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2rem",
  letterSpacing: "0.1px",
  color: "#FFFFFF",
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
    // lineHeight: "2rem",
  },
}));

const LinkHeading = styled(Typography)({
  fontFamily: "Fira Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "2rem",
  lineHeight: "2.5rem",
  color: "#FFFFFF",
});

const Links = styled("a")({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.5rem",
  lineHeight: "3rempx",
  letterSpacing: "0.1px",
  color: "#FFFFFF",
  textDecoration: "none",
});

const MiddleWrapper = styled(Box)({
  width: "50%",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media (max-width: 600px)": {
    height: "auto",
    width: "auto",
  },
});

const SubscibeText = styled(Typography)({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "2rem",
  lineHeight: "2.5rem",
  color: "white",
});

const SuperMainBox = styled(Box)({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  background: "#A15D1A",
  "@media (min-width: 320px)": {
    height: "auto",
    width: "auto",
  },
});

const ThickDivider = styled(Divider)(({ theme }) => ({
  border: "1px solid #D9D9D9",
  backgroundColor: "white",
  width: "auto",
  marginTop: "50px",
}));

const CopyRight = styled(Link)({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "1.5rem",
  lineHeight: "3rem",
  letterSpacing: "0.1px",
  color: "#FFFFFF",
  textAlign: "center",
});

const MainMiddleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
  },
}));

const DashBox = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "4px",
  background: "#FCB215",
}));

const ContactIconBox = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  background: "#FF9307",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
}));
const ContactTextBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "50px",
  display: "flex",
  marginLeft: "20px",
  marginTop: "20px",
}));

const ContactText = styled("a")(({ theme }) => ({
  fontFamily: "Fira Sans",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "27px",
  display: "flex",
  alignItems: "center",
  color: "#FFFFFF",
}));

const ConnectWithUs = styled(Typography)(({ theme }) => ({
  fontFamily: "Fira Sans",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "2rem",
  display: "flex",
  alignItems: "center",
  color: "#DBDBDB",
  marginTop: "20px",
}));

const Footer = () => {
  const handleButtonClick = () => {
    console.log("Send button clicked");
  };
  return (
    <>
      <SuperMainBox>
        <MainWrapper>
          <Grid container spacing={3} sx={{ margin: "10px" }}>
            <Grid item xs={12} sm={12} md={4} sx={{ flexGrow: 1 }}>
              <Wrapper>
                <Box display={"flex"}>
                  <Cursive>RentV</Cursive>
                  <RentVBox height={"100px"} width={"100px"}>
                    <IconRntV src={RentCarIcon} />
                  </RentVBox>
                </Box>
                <Box>
                  <Address>No 1, 8th cross,</Address>
                  <Address>Dassapa layout,</Address>
                  <Address>Rammurthy Nagar,</Address>
                  <Address>Bangalore,</Address>
                  <Address>Karnataka,</Address>
                  <Address>560016.</Address>
                </Box>
              </Wrapper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MainMiddleWrapper>
                <MiddleWrapper>
                  <Box>
                    <LinkHeading marginBottom={{ xs: "5px", md: "10px" }}>
                      Quick links
                    </LinkHeading>
                    <DashBox></DashBox>
                  </Box>
                  <Links href={"/"}>Home</Links>
                  {/* <Links href={"/aboutus"}>Services</Links> */}
                  <Links href={"/aboutus"}>About</Links>
                  <Links href={"/contactus"}>Contact</Links>
                </MiddleWrapper>
              </MainMiddleWrapper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ flexGrow: 1 }}>
              <RightWrapper>
                <SubscibeText marginBottom={{ xs: "5px", md: "10px" }}>
                  Contact Info
                </SubscibeText>
                <DashBox></DashBox>
                <Box display={"flex"}>
                  <ContactIconBox>
                    <CallIcon style={{ color: "white" }} fontSize="large" />
                  </ContactIconBox>
                  <ContactTextBox>
                    <ContactText>+91 9986432541</ContactText>
                  </ContactTextBox>
                </Box>
                <Box display={"flex"} marginBottom={{ xs: "20px", md: "20px" }}>
                  <ContactIconBox>
                    <a href="mailto:rentavahan@gmail.com">
                      <MailOutlineIcon
                        style={{ color: "white" }}
                        fontSize="large"
                      />
                    </a>
                  </ContactIconBox>
                  <ContactTextBox>
                    <a href="mailto:rentavahan@gmail.com" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "white" }}>
                      <ContactText>rentavahan@gmail.com</ContactText>
                    </a>
                  </ContactTextBox>
                </Box>
                {/* <ThemeProvider theme={theme}>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleButtonClick}>
                            <img
                              src={Send}
                              alt="Send"
                              style={{ width: "24px", height: "24px" }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton onClick={handleButtonClick}>
                            <MailOutlineIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    marginTop={"5px"}
                    placeholder=""
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: "#D9D9D9",
                        borderRadius: "10px",
                      },
                    }}
                  />
                </ThemeProvider> */}
                <ConnectWithUs>Connect with us</ConnectWithUs>
                <Grid container>
                  <Grid item xs={3} sm={6} md={3} display="flex" mt={2}>
                    <a href="https://www.facebook.com">
                      <FacebookOutlinedIcon
                        style={{ color: "white" }}
                        fontSize="large"
                      />
                    </a>
                  </Grid>
                  <Grid item xs={3} sm={6} md={3} display="flex" mt={2}>
                    <a href="https://www.instagram.com">
                      <InstagramIcon
                        style={{ color: "white" }}
                        fontSize="large"
                      />
                    </a>
                  </Grid>
                  <Grid item xs={3} sm={6} md={3} display="flex" mt={2}>
                    <a href="https://www.twitter.com">
                      <TwitterIcon
                        style={{ color: "white" }}
                        fontSize="large"
                      />
                    </a>
                  </Grid>
                  <Grid item xs={3} sm={6} md={3} display="flex" mt={2}>
                    <a href="https://www.linkedin.com">
                      <LinkedInIcon
                        style={{ color: "white" }}
                        fontSize="large"
                      />
                    </a>
                  </Grid>
                </Grid>
              </RightWrapper>
            </Grid>
          </Grid>
        </MainWrapper>
        <ThickDivider variant="middle" />
        <CopyRight to="/privacy_policy.html" target="_blank">
          Copy Rights RentV 2023 / Privacy policy{" "}
        </CopyRight>
      </SuperMainBox>
    </>
  );
};

export default Footer;
