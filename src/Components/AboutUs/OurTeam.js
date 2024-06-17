import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import Pari from "../../Assests/Pari.png";
import Raju from "../../Assests/Raju.png";
import techclockers from "../../Assests/techclockers.png";

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "2rem",
  lineHeight: "2rem",
  color: "#000000",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
    lineHeight: "4rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    lineHeight: "3rem",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "auto",
  },
}));

const Name = styled(Typography)({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.5rem",
  lineHeight: "50px",
  color: "#FFF",
});

const Designation = styled(Typography)({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: "4rem",
  color: "#6D6D6D",
});

const NameBox = styled(Box)(({ theme }) => ({
  background: "#A15D1A",
  height: "50px",
  width: "250px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "60px",
  marginTop: "10px",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: "100px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "50px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  height: "300px",
  width: "300px",
  [theme.breakpoints.down("md")]: {
    height: "275px",
    width: "275px",
  },
}));

const OurTeam = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Heading>Meet Our Team</Heading>
      <Grid container spacing={10} mt={1}>
        <Grid item xs={12} sm={12} md={4}>
          <Wrapper>
            <Image src={Pari} alt="Photo Of Pari Kannapan" />
            <NameBox>
              <Name>Pari Kannapan</Name>
            </NameBox>
            <Designation>Founder</Designation>
          </Wrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Wrapper>
            <Image src={Raju} alt="Photo of R S Srinivasa Raju" />
            <NameBox>
              <Name>R S Srinivasa Raju</Name>
            </NameBox>
            <Designation>Founder</Designation>
          </Wrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Wrapper>
            <Image src={techclockers} alt="Photo of R S Srinivasa Raju" />
            <NameBox>
              <Name>Techclockers</Name>
            </NameBox>
            <Designation>Technical partner</Designation>
          </Wrapper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default OurTeam;
