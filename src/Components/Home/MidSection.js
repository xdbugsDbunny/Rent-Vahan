import React from "react";
import { Container, Box, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import global from "../../Assests/Icons/global.webp";
import bikeIcon from "../../Assests/Icons/bikeIcon.webp";
import calendar from "../../Assests/Icons/calendar.webp";
import heart from "../../Assests/Icons/heart.webp";
import rocket from "../../Assests/Icons/rocket.webp";
import signup from "../../Assests/Icons/signup.webp";
import approval from "../../Assests/Icons/approval.webp";
import returnRate from "../../Assests/Icons/returnRate.webp";

const data = [
  {
    name: "signup",
    img: signup,
    heading: "Sign up",
  },
  {
    name: "global",
    img: global,
    heading: "Build Your Network",
  },
  {
    name: "bikeIcon",
    img: bikeIcon,
    heading: "Find the Perfect Vehicle",
  },
  {
    name: "calendar",
    img: calendar,
    heading: "Check Availability and Details",
  },
  {
    name: "approval",
    img: approval,
    heading: "Book and Confirm",
  },
  {
    name: "heart",
    img: heart,
    heading: "Enjoy Your Ride",
  },
  {
    name: "returnRate",
    img: returnRate,
    heading: "Return and Rate",
  },
  {
    name: "rocket",
    img: rocket,
    heading: "Explore and Expand",
  },
];

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "8px",
  background: "#e3cfbb",
  width: "300px",
  height: "300px",
  marginBottom: "50px",
  marginLeft: "20px",
  [theme.breakpoints.down("lg")]: {
    height: "250px",
    width: "250px",
    marginLeft: "70px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "80px",
    marginRight: "10px",
    height: "200px",
    width: "200px",
  },
}));

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: "2rem",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
}));

const CustomDot = ({ onClick, active }) => (
  <button
    style={{
      backgroundColor: active ? "#A15D1A" : "#D9D9D9", // Change the color of the dots
      width: "20px",
      height: "20px",
      margin: "0 5px", // Adjust the spacing between dots
      borderRadius: "50%",
      border: "none",
      outline: "none",
    }}
    onClick={onClick}
  />
);

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "2rem",
  lineHeight: "6rem",
  textAlign: "center",
  marginLeft:'-40px',
  [theme.breakpoints.down('md')] : {
    fontSize: "1.75rem",
    lineHeight: "4rem",
    marginLeft:'10px',
  },
  [theme.breakpoints.down('sm')] : {
    fontSize: "1.5rem",
    lineHeight: "3rem",
    marginLeft:'10px',
  }
}));

const MidSection = () => {
  return (
    <Container maxWidth="lg" height="100vh">
      <Heading>How It Works?</Heading>
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        autoPlay={true}
        showDots={true}
        arrows={false}
        customDot={<CustomDot />}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        containerClass="react-multi-carousel-list"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((item, index) => (
          <Wrapper key={index}>
            <img src={item.img} alt={item.name} height="75px" width="75px" />
            <Text>{item.heading}</Text>
          </Wrapper>
        ))}
      </Carousel>
    </Container>
  );
};

export default MidSection;
