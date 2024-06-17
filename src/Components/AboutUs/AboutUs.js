import React from 'react'
import { Box, styled } from '@mui/material'
import Common from '../Common/Common'
import AboutTopSection from './AboutTopSection'
import AboutMidSection from './AboutMidSection'
import AboutMidBottomSection from './AboutMidBottomSection'
import Footer from '../Footer/Footer'
import OurTeam from './OurTeam'
import ScrollToTop from '../Common/ScrollToTop'


const AboutUs = () => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Common/>
      <AboutTopSection/>
      <AboutMidSection/>
      <AboutMidBottomSection/>
      <OurTeam/>
      <Box mt={{md:'200px',xs:'300px',lg:'100px'}}>
        <Footer/>
      </Box>
      <ScrollToTop/>
    </Box>
  )
}

export default AboutUs