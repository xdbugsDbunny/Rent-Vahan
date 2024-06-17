import { Box, Typography, styled, Grid } from "@mui/material";
import React from "react";
import car from "../../Assests/Images/car.webp";

const MainWrapper = styled(Box)(({ theme }) => ({
  background: "#a15d1a",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "2rem",
  lineHeight: "2.375rem",
  letterSpacing: "-0.66px",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontstyle: "normal",
  fontWeight: 700,
  fontSize: "2.375rem",
  lineHeight: "3rem",
  letterSpacing: "-1.56px",
  color: "#FFFFFF",
  marginBottom: "10px",
  marginTop: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.875rem",
    lineHeight: "2.375rem",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "2rem",
  lineHeight: "2.375rem",
  letterSpacing: "-0.24px",
  color: "#FFFFFF",
}));

const LeftGrid = styled(Typography)(({ theme }) => ({
  margin: "120px",
  [theme.breakpoints.down("md")]: {
    margin: "0px",
    marginTop: "50px",
    marginLeft: "10px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  height: "auto",
  width: "auto",
  marginTop: "100px",
  [theme.breakpoints.down("sm")]: {
    width:'150%',
    height:'auto',
    marginTop: "100px",
  },
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  height: "auto",
  overflow: "hidden",
}));

const TopSection = () => {
  return (
    <MainWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <LeftGrid item xs={12} sm={12} md={12} lg={12}>
            <SubHeading>Plan your trip now</SubHeading>
            <Heading>
              Save <span style={{ color: "#F8881A" }}>big</span> with our car &
              bike rental
            </Heading>
            <Description>
              Unlock the Power of Vehicle Sharing with RentV{" "}
            </Description>
          </LeftGrid>
        </Grid>
        <RightGrid item xs={12} sm={6} md={6} lg={6}>
          <Box height={'auto'} width={'100%'}>
            <Image alt="Car Image" src={car} />
          </Box>
        </RightGrid>
      </Grid>
    </MainWrapper>
  );
};

export default TopSection;
