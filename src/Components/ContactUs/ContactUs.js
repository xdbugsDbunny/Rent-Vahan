import { Box, Button, TextField, Typography, styled } from '@mui/material'
import BikeCar from '../../Assests/BikeCar.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import Common from '../Common/Common'
import Footer from '../Footer/Footer'
import ContactMidSection from './ContactMidSection'
import ScrollToTop from '..//Common/ScrollToTop'




const ContactUs = () => {

  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'} >
      <Common  />
      <ContactMidSection/>
      <Footer/>
      <ScrollToTop/>
    </Box>

  )
}

export default ContactUs