import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import hyderabad from "../../Assests/Images/hyderabad.webp";
import banglore from "../../Assests/Images/banglore.webp";
import mumbai from "../../Assests/Images/mumbai.webp";
import kerala from "../../Assests/Images/kerala.webp";
import chennai from "../../Assests/Images/chennai .webp";
import goa from "../../Assests/Images/goa.webp";
// import delhi from "../../Assests/Images/delhi.webp";
// import kolkata from "../../Assests/Images/kolkata.webp";
// import gujarat from "../../Assests/Images/gujrat.webp";

const CityData = [
  { name: "Hyderabad", image: hyderabad },
  { name: "Bangalore", image: banglore },
  { name: "Mumbai", image: mumbai },
  { name: "Kerala", image: kerala },
  { name: "Chennai", image: chennai },
  { name: "Goa", image: goa },
  // { name: "Delhi", image: delhi },
  // { name: "Kolkata", image: kolkata },
  // { name: "Gujarat", image: gujarat },
];
const CityName = styled(Typography)({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "2.25rem",
  color: "#000000",
  textAlign: "center",
});

const CityBox = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

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
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    lineHeight: "3rem",
  },
}));

const BlockText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.8rem",
  lineHeight: "3rem",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem", // divided by 1.5
    lineHeight: "2.4rem",
    marginLeft: "100px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem", // divided by 1.5
    lineHeight: "2.4rem",
    marginLeft: "25px",
    textAlign: "center",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "2.25rem",
  color: "#6D6D6D",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
  },
}));

const MidBottomSection = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Heading>Our Presence</Heading>
          <Text>More Destinations. More Ease. More Affordable.</Text>
        </Grid>
        {CityData.map((city, index) => (
          <CityBox key={index} item xs={12} sm={4} md={2}>
            <Card sx={{ height: "200px", width: "200px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  width="200"
                  image={city.image}
                  alt={city.name}
                />
                <CardContent>
                  <CityName gutterBottom variant="h5" component="div">
                    {city.name}
                  </CityName>
                </CardContent>
              </CardActionArea>
            </Card>
          </CityBox>
        ))}
      </Grid>
      <Grid
        container
        spacing={8}
        marginTop={{ md: "50px", sm: "25px", xs: "0px" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <BlockText>6+</BlockText>
          <BlockText>Cities</BlockText>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BlockText>60+</BlockText>
          <BlockText>Vehicles</BlockText>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BlockText>
            4.8/5 <StarRateIcon fontSize="large" />
          </BlockText>
          <BlockText>Google Reviews</BlockText>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BlockText>1000+</BlockText>
          <BlockText>Happy Customers</BlockText>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MidBottomSection;
