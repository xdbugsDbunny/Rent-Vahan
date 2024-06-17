import React from 'react'
import { motion, useScroll } from "framer-motion";


const ScrollProgressBar = () => {
    const { scrollYProgress } = useScroll();
  return (
      <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgressBar