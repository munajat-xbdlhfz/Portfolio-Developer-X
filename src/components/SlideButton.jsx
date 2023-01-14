import React from 'react'
import { motion } from 'framer-motion'

import { left, right } from '../assets'
import { hoverButton } from '../utils/motion'

const SlideButton = ({ direction, buttonStyles, imgStyles }) => {
  return (
    <motion.button
      variants={hoverButton}
      initial="hidden"
      whileHover="show"
      className={`${buttonStyles} rounded-full flex justify-center 
      items-center ${direction === "left" ? 
      "bg-primary-gray" : 
      "bg-[#075FE4]"}`}
    >
      <img 
        src={direction === "left" ? left : right}
        alt="direction"
        className={`${imgStyles} invert object-contain`}
      />
    </motion.button>
  )
}

export default SlideButton