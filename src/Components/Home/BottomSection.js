import React from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Typography,
  styled,
} from "@mui/material";
import google from "../../Assests/Images/google.png";
import phone from "../../Assests/Icons/phone.png";
import lgBlob from "../../Assests/Icons/lgBlob.png";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  width: "100%",
}));

const Number = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "2rem",
  lineHeight: "4rem",
  color: "#A15D1A",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    textAlign: "center",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "2.5rem",
  lineHeight: "3rem",
  color: "#000000",
  marginBottom: "25px",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    lineHeight: "2.5rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    lineHeight: "2rem",
    textAlign: "center",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "36px",
  color: "#6D6D6D",
  marginBottom: "25px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
    lineHeight: "25px",
    textAlign: "left",
  },
}));

const DownloadButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  height: "auto",
  backgroundColor: "black",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "black",
    color: "inherit",
    boxShadow: "none",
  },
});

const DownloadText = styled(Typography)({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#FFFFFF",
});

const ButtonHeading = styled(Typography)({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "32px",
  color: "#FFFFFF",
});
const GooglePlayButton = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.rentv"
      target="_blank"
      rel="noopener noreferrer"
      style={{textDecoration:'none'}}
    >
      <DownloadButton>
        <img src={google} alt="Google Play" style={{ marginRight: "8px" }} />
        <Box>
          <DownloadText>Download on the</DownloadText>
          <ButtonHeading>Google Play</ButtonHeading>
        </Box>
      </DownloadButton>
    </a>
  );
};

const IconBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PhoneImage = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  height: "480px",
  left: "137px",
  [theme.breakpoints.down("md")]: {
    left: "-112px",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    left: "-78px",
  },
}));

const BlobImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 0,
  right: "-500px",
  top: "120px",
  height: "500px",
  width: "auto",
  [theme.breakpoints.down("md")]: {
    right: "-250px",
    left: "-250px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "320px",
    width: "320px",
    left: "-160px",
    top: "125px",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  height: "500px",
  width: "100%",
  // backgroundColor: "blue",
  display: "flex",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    // backgroundColor: "pink",
    height: "500px",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    // backgroundColor: "red",
    height: "500px",
    justifyContent: "center",
  },
}));

const BottomSection = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Item>
            <Number>1000+</Number>
            <Heading>Download our app to get most out of it</Heading>
            <Text>
              RentV 1.0: The secure, convenient way to rent or lend bikes and
              cars within your trusted network of friends. Find the vehicle you
              need, choose your rental period, and enjoy hassle-free borrowing
              and lending. Available now on the Play Store.
            </Text>
            <IconBox>
              <GooglePlayButton />
            </IconBox>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ImageBox>
            <div
              style={{
                position: "relative",
                width: "fit-content",
              }}
            >
              <PhoneImage src={phone} alt="Phone" />
              <BlobImage>
                <svg
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  id="blobSvg"
                >
                  <path id="blob" fill="rgba(161, 93, 26, 0.3)">
                    <animate
                      attributeName="d"
                      dur="10000ms"
                      repeatCount="indefinite"
                      values="M450,303Q470,356,437,399.5Q404,443,344.5,423Q285,403,247.5,413.5Q210,424,164,420Q118,416,83.5,381.5Q49,347,64.5,298.5Q80,250,52.5,196Q25,142,70.5,112Q116,82,165,86Q214,90,257,60.5Q300,31,346,51.5Q392,72,426.5,110.5Q461,149,445.5,199.5Q430,250,450,303Z;

                      M477,301.5Q464,353,419,379Q374,405,336,433Q298,461,254,442.5Q210,424,163,421Q116,418,95,376.5Q74,335,64,292.5Q54,250,51.5,201.5Q49,153,93,130.5Q137,108,174,92.5Q211,77,252,69.5Q293,62,349,58.5Q405,55,396.5,119Q388,183,439,216.5Q490,250,477,301.5Z;

                      M468,301Q462,352,424,386Q386,420,344,448Q302,476,254,458.5Q206,441,180.5,405Q155,369,103.5,357Q52,345,35.5,297.5Q19,250,50,209.5Q81,169,114.5,145.5Q148,122,181,108Q214,94,255,70Q296,46,338,66.5Q380,87,407.5,124Q435,161,454.5,205.5Q474,250,468,301Z;

                      M470.5,303Q470,356,411,367Q352,378,325.5,421.5Q299,465,253,452.5Q207,440,162.5,428Q118,416,116,365.5Q114,315,91,282.5Q68,250,52.5,198.5Q37,147,87,127.5Q137,108,176,102.5Q215,97,258.5,59.5Q302,22,352,40.5Q402,59,436,101.5Q470,144,470.5,197Q471,250,470.5,303Z;

                      M444.5,290.5Q418,331,384,353.5Q350,376,322,408.5Q294,441,253,428.5Q212,416,170,409.5Q128,403,107.5,365.5Q87,328,50,289Q13,250,25,198.5Q37,147,79,117.5Q121,88,166.5,86.5Q212,85,253,71.5Q294,58,333,77.5Q372,97,408.5,126.5Q445,156,458,203Q471,250,444.5,290.5Z;

                      M449,300Q458,350,432,397.5Q406,445,349.5,441.5Q293,438,245.5,458Q198,478,161.5,442.5Q125,407,89,376Q53,345,59.5,297.5Q66,250,50,198Q34,146,78.5,118.5Q123,91,165.5,78.5Q208,66,249.5,68.5Q291,71,335,79.5Q379,88,400.5,127.5Q422,167,431,208.5Q440,250,449,300Z;

                      M437.5,287.5Q407,325,384,357Q361,389,333.5,441.5Q306,494,261.5,445Q217,396,166,407.5Q115,419,95,376.5Q75,334,74.5,292Q74,250,50,196Q26,142,86.5,131.5Q147,121,174.5,80.5Q202,40,249.5,42.5Q297,45,333,73Q369,101,378,142.5Q387,184,427.5,217Q468,250,437.5,287.5Z;

                      M475.5,298.5Q452,347,402,362Q352,377,319,392Q286,407,249,411.5Q212,416,181,396Q150,376,111.5,355.5Q73,335,68.5,292.5Q64,250,49,198Q34,146,78.5,118.5Q123,91,168,88.5Q213,86,257,55.5Q301,25,332,66.5Q363,108,378,144.5Q393,181,446,215.5Q499,250,475.5,298.5Z;

                      M450,303Q470,356,437,399.5Q404,443,344.5,423Q285,403,247.5,413.5Q210,424,164,420Q118,416,83.5,381.5Q49,347,64.5,298.5Q80,250,52.5,196Q25,142,70.5,112Q116,82,165,86Q214,90,257,60.5Q300,31,346,51.5Q392,72,426.5,110.5Q461,149,445.5,199.5Q430,250,450,303Z;
                      "
                    ></animate>
                  </path>
                </svg>
              </BlobImage>
            </div>
          </ImageBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BottomSection;
