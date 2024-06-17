import React, { useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, styled, Typography } from '@mui/material'
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
      "RentV offers a convenient way to access vehicles within your network. No more waiting in long rental lines or dealing with paperwork",
  
      "RentV helps you save money compared to traditional rental companies. By renting directly from friends or trusted connections, you can",

      "RentV fosters a sense of community by connecting individuals who share a common interest in vehicle sharing. You can build new connections",
  
      "RentV connects you with friends and trusted individuals within your network, providing a sense of security and reliability. You can read ratings",
  
      "RentV prioritizes your safety and security. Our platform implements robust verification processes to ensure that only genuine users are part of",
  
      "Our app and website are designed to provide a seamless and user-friendly experience. The intuitive interface makes it easy to search, book, and manage your rentals effortlessly",
    ],
    Descriptions: [
      "RentV offers a convenient way to access vehicles within your network. No more waiting in long rental lines or dealing with paperwork. With RentV, you can find and book a vehicle in just a few taps, making the rental process quick and hassle-free. RentV provides flexibility in terms of rental periods and pickup/drop-off locations. You can easily communicate and coordinate with the lender to find a convenient arrangement that works for both parties.",
  
      "RentV helps you save money compared to traditional rental companies. By renting directly from friends or trusted connections, you can often find more competitive rates and negotiate flexible terms. Say goodbye to excessive rental fees and hidden charges.",
  
      "RentV fosters a sense of community by connecting individuals who share a common interest in vehicle sharing. You can build new connections, strengthen existing relationships, and create a network of trusted individuals who can support each other's transportation needs.",
  
      "RentV connects you with friends and trusted individuals within your network, providing a sense of security and reliability. You can read ratings and reviews from others in the community, ensuring a trustworthy rental experience.",
  
      "RentV prioritizes your safety and security. Our platform implements robust verification processes to ensure that only genuine users are part of the community. Additionally, we provide insurance coverage for added protection during the rental period.",
  
      "Our app and website are designed to provide a seamless and user-friendly experience. The intuitive interface makes it easy to search, book, and manage your rentals effortlessly.",
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
  
  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    height: "250px",
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


  const StyledContainer = styled(Container)(({theme})=>({
    marginTop:'75px',
    [theme.breakpoints.down('sm')] : {
        marginTop:'200px'
    }
}))

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
const AboutMidBottomSection = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState("");
    const [dialogHeading, setDialogHeading] = useState("");
  
    const handleTextClick = (des,head) => {
      setDialogContent(des);
      setDialogHeading(head);
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
    return (
      <StyledContainer maxWidth="xl">
        <Heading>OUR BENEFITS</Heading>
        <Grid container spacing={2} mt={{xs:'25px',md:'50px'}}>
          {data.Images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Item>
                <Image src={image} alt={`Icon ${index}`} />
                <SubHeading>{data.Headings[index]}</SubHeading>
                <Text>
                  {data.Texts[index]}{" "}
                  <span
                    style={{ fontSize: "12px", fontWeight: "600", cursor:'pointer' }}
                    onClick={() => handleTextClick(data.Descriptions[index],data.Headings[index])}
                  >
                    ...Read More
                  </span>
                </Text>
              </Item>
            </Grid>
          ))}
        </Grid>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle><SubHeading>{dialogHeading}</SubHeading></DialogTitle>
          <DialogContent><Text>{dialogContent}</Text></DialogContent>
          <DialogActions>
            <ReadMoreButton onClick={handleCloseDialog} color="primary">
              Close
            </ReadMoreButton>
          </DialogActions>
        </Dialog>
      </StyledContainer>
  )
}

export default AboutMidBottomSection;
  