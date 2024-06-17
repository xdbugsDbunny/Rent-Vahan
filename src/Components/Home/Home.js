import React from "react";
import TopSection from "./TopSection";
import TopMidSection from "./TopMidSection";
import MidSection from "./MidSection";
import BottomSection from "./BottomSection";
import MidBottomSection from "./MidBottomSection";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../Common/ScrollToTop";
import ReviewSection from "./ReviewSection";


const Home = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent={"center"}>
      <Box marginTop={{ xs: "0px", sm: "4px" }}>
        <TopSection />
      </Box>
      <Box mt={10}>
        <TopMidSection />
      </Box>
      <Box mt={10}>
        <MidSection />
      </Box>
      <Box mt={10}>
        <MidBottomSection />
      </Box>
      <Box mt={15}>
        <ReviewSection />
      </Box>
      <Box mt={10}>
        <BottomSection />
      </Box>
      <Box mt={{md:'100px',sm:'100px'}}>
        <Footer/>
      </Box>
      <ScrollToTopButton />
    </Box>
  );
};

export default Home;