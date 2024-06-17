import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import couple from "../../Assests/Images/couple.png";

const Heading = styled(Typography)(({theme})=>({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "2rem",
  color: "#000000",
  [theme.breakpoints.down('md')] : {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down('sm')] : {
    fontSize: "1.5rem",
    marginLeft: "10px",
  },
}));

const Heading2 = styled(Typography)(({theme})=>({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "#000000",
  [theme.breakpoints.down('md')] : {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down('sm')] : {
    fontSize: "1.25rem",
    marginLeft: "10px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "Medium",
  fontWeight: "500",
  fontSize: "1.25rem",
  lineHeight: "2rem",
  color: "#000000",
  marginTop: "25px",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    lineHeight: "25px",
    marginLeft: "10px",
  },
}));

const CoupleImage = styled("img")(({ theme }) => ({
  height: "500px",
  width: "auto",
  [theme.breakpoints.down("sm")]: {
    height: "300px",
    width: "auto",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: "100px",
  [theme.breakpoints.down("md")]: {
    marginTop: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "25px",
  },
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
    marginTop: "0px",
    fontSize: "12px",
    height:'36px'
  },
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    marginBottom:'30px',
    marginTop: "30px",
  },
}));

const DialogHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "30px",
  marginBottom: "10px",
}));
const DialogText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "27px",
}));

const AboutTopSection = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleButtonClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          display={"flex"}
          justifyContent={{ xs: "center", sm: "center", md: "center" }}
        >
          <CoupleImage src={couple} alt="Two Person Talking" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            <Heading>About Company</Heading>
            <Heading2>You start the engine and your adventure begins</Heading2>
            <Text>
              At RentV , we belive in the Power of sharing and the strength of
              community and freiends. Our aim is to maximum the utilization of
              vehicles.we see a lot of vehicles under used and some owners
              strugle to take a decision to sell of their bikes/cars. Rentv
              gives you an option to rent out your vehicles.
            </Text>
            <ButtonBox>
              <ReadMoreButton onClick={handleButtonClick} variant="contained">
                Read More
              </ReadMoreButton>
            </ButtonBox>
          </Box>
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true}>
        <DialogTitle>
          <DialogHeading>
            Welcome to RentV - where sharing vehicles becomes a seamless and
            enriching experience.
          </DialogHeading>
        </DialogTitle>
        <DialogContent>
          <DialogText>
            • At RentV , we belive in the Power of sharing and the strength of
            community and freiends. Our aim is to maximum the utilization of
            vehicles.we see a lot of vehicles under used and some owners strugle
            to take a decision to sell of their bikes/cars. Rentv gives you an
            option to rent out your vehicles.
          </DialogText>
          <DialogText>
            • We understand the challenges and limitations of traditional
            vehicle rental services. High costs, complex procedures, and
            impersonal experiences have inspired us to create a solution that
            offers convenience, affordability, and a sense of belonging.
          </DialogText>
          <DialogText>
            • With RentV, you can tap into the resources of your trusted network
            to find the perfect vehicle for your needs. Whether it's a quick
            ride around the city or a road trip with friends, RentV connects you
            with individuals who are willing to lend their vehicles at
            competitive rates.
          </DialogText>
          <DialogText>
            • Our platform goes beyond the transactional nature of traditional
            rentals. It fosters a sense of community, enabling you to build
            relationships and trust with fellow users who share a common
            interest in vehicle sharing. We prioritize security and implement
            stringent verification processes to ensure that RentV remains a safe
            and reliable environment for all.
          </DialogText>
          <DialogText>
            • RentV is also committed to sustainability and environmental
            responsibility. By promoting vehicle sharing we believe there will
            be a small reduction in mining of materials needed for manufacturing
            new vehicles and a longer use of existing vehicles.
          </DialogText>
          <DialogText>
            • Join RentV today and experience a new way of accessing
            transportation. Enjoy the convenience, cost savings, and enhanced
            social connections that our platform offers. Together, let's
            redefine the way we think about vehicle rental and create a
            community that values sharing, trust, and sustainability.
          </DialogText>
          <DialogText gutterBottom  style={{ fontFamily: 'Sometype', textAlign: 'right' }} >
            <i>- powered by CISAPP Online</i>
          </DialogText>
        </DialogContent>
        <DialogActions>
          <ReadMoreButton onClick={handleCloseDialog} color="primary">
            Close
          </ReadMoreButton>
        </DialogActions>
      </Dialog>
    </StyledContainer>
  );
};

export default AboutTopSection;
