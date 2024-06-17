import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  styled,
  Avatar,
} from "@mui/material";
import Star from "../../Assests/Icons/Star.png";
import avatar from "../../Assests/Icons/avatar.png";

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "2rem",
  lineHeight: "3rem",
  color: "#000000",
  textAlign: "center",
  [theme.breakpoints.down('md')] : {
    fontSize: "1.75rem",
    lineHeight: "3rem",
  },
  [theme.breakpoints.down('sm')] : {
    fontSize: "1.5rem",
    lineHeight: "3rem",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(161, 93, 26, 0.3)",
  padding: theme.spacing(4),
  textAlign: "center",
  height: "325px",
  width: "auto",
  borderRadius: "20px",
  [theme.breakpoints.down("md")]: {
    height: "300px",
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    height: "325px",
    width: "auto",
  },
}));

const ReviewText = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "25px",
  color: "#808080",
  textAlign: "left",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    lineHeight: "20px",
    marginLeft: "10px",
  },
}));

const StyledName = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.25rem",
  lineHeight: "45px",
  color: "#000000",
  marginLeft: "25px",
}));

const Wrapper = styled(Box)(({theme})=>({
  display:'flex',
  padding:"50px 0px 10px 0px",
  [theme.breakpoints.down('md')] : {
    padding:"50px 0px 10px 0px",
  }
}))

const ReviewSection = () => {
  return (
    <Container maxWidth="xl">
      <Heading>What People Are Saying About RentV</Heading>
      <Grid container spacing={4} mt={{ md: "25px",sm:'25px',xs:'25px' }}>
        <Grid item xs={12} sm={12} md={4}>
          <Item>
            <Wrapper>
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
            </Wrapper>
            <ReviewText>
              Thanks to the RentV, I can now rent cars with ease and
              convenience. It's so easy to book a car and the vehicle will be
              from a trusted network only unlike ...
            </ReviewText>
            <Wrapper display={"flex"} padding={"50px 50px 20px 50px"}>
              <Avatar src={avatar} />
              <StyledName>Suraj Singh Negi</StyledName>
            </Wrapper>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Item>
            <Wrapper>
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
            </Wrapper>
            <ReviewText>
              I recently tried out the RentV App and I am so impressed. It is
              super easy to use and make booking a car effortless. I would
              highly recommend this...
            </ReviewText>
            <Wrapper>
              <Avatar src={avatar} />
              <StyledName>Bhargav Varma</StyledName>
            </Wrapper>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Item>
            <Wrapper>
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
              <img src={Star} alt="Star Logo" />
            </Wrapper>
            <ReviewText>
              I recently used the RentV app and was very impressed. The whole
              process was so easy to use, from booking online to picking up the
              car at my chosen location...
            </ReviewText>
            <Wrapper>
              <Avatar src={avatar} />
              <StyledName>Uday Kiran</StyledName>
            </Wrapper>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReviewSection;
