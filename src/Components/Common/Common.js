import React from 'react'
import { Box, styled, Typography, Breadcrumbs, Grid } from '@mui/material'
import { useLocation } from 'react-router-dom'
import BikeCar from '../../Assests/BikeCar.jpg'
import {Link} from 'react-router-dom'
import ContactWallpaper from '../../Assests/ContactWallpaper.png'

const HeadingBox = styled(Breadcrumbs)(({theme})=>({
  width: '275px',
  height: '88px',
  marginLeft: '120px',
  [theme.breakpoints.down('sm')]:{
    marginLeft: '10px',
    // marginTop: '10px',
  }
}))

const Title = styled(Typography)(({theme})=>({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '2rem',
  lineHeight: '2rem',
  color: '#000000',
  marginLeft: '120px',
  [theme.breakpoints.down('sm')]:{
    marginLeft: '10px',
    fontSize: '1.75rem',
    lineHeight: '2rem',
    color: '#000000',
    marginTop: '20px',
  }
}))

const GoTo = styled(Link)(({theme})=>({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '1.75rem',
  lineHeight: '2rem',
  color: '#6D6D6D',
  cursor:'pointer',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  [theme.breakpoints.down('sm')]:{
    fontSize: '20px',
    lineHeight: '16px',
  }
}))

const SlashHardCoded = styled(Typography)(({theme})=>({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '1.25rem',
  lineHeight: '2rem',
  color: '#6D6D6D',
  textDecoration: 'none',
  [theme.breakpoints.down('sm')]:{
    fontSize: '20px',
    lineHeight: '16px',
  }
}))

const Image = styled('img')({
  width: '100%',
  height: 'auto',
})




const Common = () => {
  const location = useLocation();
  const { pathname } = location;

  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const getPageData = () => {
    if (pathname === '/contactus') {
      return {
        title: 'Contact Us',
        linkText: 'AboutUs',
        linkTo: '/aboutus',
        src:ContactWallpaper
      };
    } else if (pathname === '/aboutus') {
      return {
        title: 'About Us',
        linkText: 'Contact',
        linkTo: '/contactus',
        src:BikeCar

      };
    }
  };

  const { title, linkText, linkTo, src } = getPageData();

  return (
    <Grid xs={12} justifyContent={{xs:'center'}} mt={{xs:'20px', md:'50px'}}>
      <Title>{title}</Title>
      <Breadcrumbs role="presentation" onClick={handleClick}>
        <HeadingBox aria-label="breadcrumb">
          <Box display={'flex'}>
            <GoTo to="/">
              RentV
            </GoTo>
            <SlashHardCoded>&nbsp;/&nbsp;</SlashHardCoded>
            <GoTo to={linkTo}>
            {linkText}
            </GoTo>
          </Box>
        </HeadingBox>
      </Breadcrumbs>
      <Image src={src} />
    </Grid>
  )
}

export default Common;