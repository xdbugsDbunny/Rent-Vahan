import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  Grid,
} from "@mui/material";

const TextHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "2rem",
  lineHeight: "2.5rem",
  color: "#000000",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.7rem",
    lineHeight: "2rem",
  },
}));

const LeftSide = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "100px",
  marginTop: "50px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    alignItems: "center",
  },
}));

const RightSide = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    alignItems: "center",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "2rem",
  color: "#6D6D6D",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
    lineHeight: "1.25rem",
  },
}));

const SendMessage = styled(Button)(({ theme }) => ({
  width: "auto",
  height: "50px",
  background: "#A15D1A",
  borderRadius: "10px",
  marginTop: "10px",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#A15D1A",
    border: "2px solid #A15D1A",
  },
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    height: "36px",
  },
}));

const SendText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "20px",
  color: "#FFFFFF",
  "&:hover": {
    color: "#A15D1A",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

const MainWrapper = styled(Grid)({
  flexGrow: 1,
  padding: "30px",
});

const FormWrapper = styled(Box)({
  width: "100%",
  maxWidth: "400px",
  marginBottom: "20px",
});

const FormText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "45px",
  color: "#000000",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    lineHeight: "25px",
  },
}));

const ContactMidSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSendMessage = () => {
    alert(name);
    alert(email);
    alert(msg);
  };
  return (
    <MainWrapper container spacing={2}>
      <Grid item xs={12} md={6}>
        <LeftSide>
          <TextHeading gutterBottom>
            Have a question, feedback, or need assistance? We're here to help!
          </TextHeading>
          <br/>
          <Text gutterBottom>
            {" "}
            * Reach out to our friendly support team with the query.
          </Text>
          <br/>
          <Text gutterBottom>
            *We strive to respond to all inquiries promptly and provide the
            assistance you need.
          </Text>
          <br/>
          <Text gutterBottom>
            *Your feedback is valuable to us as we continuously strive to
            improve our services. We appreciate your support and look forward to
            assisting you.
          </Text>
          <br/>
          <Text gutterBottom>
            *Join RentV and discover the convenience of vehicle sharing within
            your trusted network.
          </Text>
        </LeftSide>
      </Grid>
      <Grid item xs={12} md={6}>
        <RightSide>
          <FormWrapper>
            <FormText>Full Name</FormText>
            <TextField
              fullWidth
              variant="outlined"
              marginTop={"10px"}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#D9D9D9",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#A15D1A", // Change the outline color on hover
                  },
                },
              }}
              onInput={(e) => setName(e.target.value)}
            />
          </FormWrapper>
          <FormWrapper>
            <FormText>Email Address</FormText>
            <TextField
              fullWidth
              variant="outlined"
              marginTop={"10px"}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#D9D9D9",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#A15D1A", // Change the outline color on hover
                  },
                },
              }}
              onInput={(e) => setEmail(e.target.value)}
            />
          </FormWrapper>
          <FormWrapper>
            <FormText>Tell us about it</FormText>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              marginTop={"10px"}
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "#D9D9D9",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#A15D1A", // Change the outline color on hover
                  },
                },
              }}
              onInput={(e) => setMsg(e.target.value)}
            />
          </FormWrapper>
          <SendMessage variant="contained" color="primary">
            <SendText onClick={handleSendMessage}>Send Message</SendText>
          </SendMessage>
        </RightSide>
      </Grid>
    </MainWrapper>
  );
};

export default ContactMidSection;
