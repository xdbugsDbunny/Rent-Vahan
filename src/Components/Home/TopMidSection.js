import {
  Paper,
  Grid,
  Typography,
  styled,
  Container,
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Dialog,
} from "@mui/material";
import React, { useState } from "react";
import directions from "../../Assests/Icons/directions.webp";
import savemoney from "../../Assests/Icons/savemoney.webp";
import community from "../../Assests/Icons/community.webp";
import shield from "../../Assests/Icons/shield.webp";
import lock from "../../Assests/Icons/lock.webp";
import high from "../../Assests/Icons/high.webp";

const data = {
  Images: [directions, savemoney, community, shield, lock, high],
  Headings: [
    "Convenience and Flexibility",
    "Cost Savings",
    "Community Building",
    "Trusted Network",
    "Enhanced Security",
    "User-Friendly Experience",
  ],
  Texts: [
    "RentV offers a convenient and flexible way to access vehicles. Whether you need a bike for a short commute or a car for a weekend getaway, RentV",

    "RentV helps you save money compared to traditional rental companies. By renting directly from friends or trusted connections, you",
    "RentV fosters a sense of community by connecting individuals who share a common interest in vehicle sharing. Build new connections",

    "With RentV, you have peace of mind knowing that you are renting or lending vehicles within your trusted network. Our platform is designed to",

    "RentV prioritizes your safety and security. Our platform implements robust verification processes to ensure that only genuine users are part of",

    "Our intuitive app interface and website make it easy to find the right vehicle for your needs. Search, book, and manage your rentals effortlessly",
  ],
  Descriptions: [
    "RentV offers a convenient and flexible way to access vehicles. Whether you need a bike for a short commute or a car for a weekend getaway, RentV connects you with trusted individuals in your network who are willing to lend their vehicles. No more waiting in long rental lines or dealing with complex paperwork.",

    "RentV helps you save money compared to traditional rental companies. By renting directly from friends or trusted connections, you can often find more competitive rates and negotiate flexible terms. Say goodbye to excessive rental fees and hidden charges.",

    "RentV fosters a sense of community by connecting individuals who share a common interest in vehicle sharing. Build new connections, strengthen existing relationships, and create a network of trusted individuals who can support each other's transportation needs.",

    "With RentV, you have peace of mind knowing that you are renting or lending vehicles within your trusted network. Our platform is designed to connect you with friends and connections you already know and trust. You can read ratings and reviews from others in the community to ensure a reliable and safe rental experience.",

    "RentV prioritizes your safety and security. Our platform implements robust verification processes to ensure that only genuine users are part of the community. We also provide insurance coverage for added protection, giving you peace of mind during the rental period.",

    "Our intuitive app interface and website make it easy to find the right vehicle for your needs. Search, book, and manage your rentals effortlessly. We believe in delivering a seamless experience from start to finish.",
  ],
};

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "2rem",
  lineHeight: "6rem",
  color: "#000000",
  textAlign: "center",
  marginBottom:"25px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
    lineHeight: "4rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
    lineHeight: "3rem",
  },
}));

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  height: "300px",
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

const Image = styled("img")(({ theme }) => ({
  height: "75px",
  width: "75px",
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: "2.5rem",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.15rem",
  lineHeight: "1.5rem",
  color: "#6D6D6D",
  textAlign: "left",
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#A15D1A",
  color: "white",
  marginTop: "30px",
  fontFamily: "Poppins",
  fontStyle: "Medium",
  fontSize: "24px",
  lineHeight: "40px",
  "&:hover": {
    backgroundColor: "white",
    color: "#A15D1A",
    border: "2px solid #A15D1A",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    fontSize: "12px",
    height:'36px'
  },
}));
const TopMidSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogHeading, setDialogHeading] = useState("");

  const handleTextClick = (des, head) => {
    setDialogContent(des);
    setDialogHeading(head);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Container maxWidth="xl" height="100vh">
      <Heading>Why Use RentV?</Heading>
      <Grid container spacing={2}>
        {data.Images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Item>
              <Image src={image} alt={`Icon ${index}`} />
              <SubHeading>{data.Headings[index]}</SubHeading>
              <Text>
                {data.Texts[index]}{" "}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleTextClick(
                      data.Descriptions[index],
                      data.Headings[index]
                    )
                  }
                >
                  ...Read More
                </span>
              </Text>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          <SubHeading>{dialogHeading}</SubHeading>
        </DialogTitle>
        <DialogContent>
          <Text>{dialogContent}</Text>
        </DialogContent>
        <DialogActions>
          <ReadMoreButton onClick={handleCloseDialog} color="primary">
            Close
          </ReadMoreButton>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TopMidSection;
