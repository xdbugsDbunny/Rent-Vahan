import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      setShowButton(yOffset > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 1000,
    display: showButton ? 'block' : 'none',
    display: 'flex', // Add this line to use flexbox
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  };

  return (
    <Button
      variant="contained"
      onClick={scrollToTop}
      style={buttonStyle}
      sx={{
            minWidth:'50px',
            borderRadius:'50%',
            height:'50px',
            width:'50px',
            background: "#a15d1a",
            border:'1px solid white',
            '&:hover':{
                background:'#a15d1a',
                backdropFilter: 'blur(10px)', // Apply a blur effect
                transition: 'background-color 0.5s ease',
                // color:'#a15d1a',
                // color:'#000000',
                // border:'2px solid black',
            },
        }}
    >
        <KeyboardDoubleArrowUpIcon/>
    </Button>
  );
};

export default ScrollToTopButton;
