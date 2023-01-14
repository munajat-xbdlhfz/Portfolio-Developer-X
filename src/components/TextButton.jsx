import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { arrow_right } from '../assets'
import { arrowRightVariants, underlineVariants } from '../utils/motion'

const TextButton = ({ text, styles }) => {
  const [onHover, setOnHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className='flex items-center gap-3 mb-2'>
        <h2 className={`${styles} text-white`}>
          {text}
        </h2>
        <motion.img
          variants={arrowRightVariants}
          animate={onHover ? "show" : "hidden"}
          src={arrow_right}
          alt="arrow right" 
          className='w-[20px] h-[20px] invert object-contain'
        />
      </div>
      <motion.div
        variants={underlineVariants}
        animate={onHover ? "show" : "hidden"}
        className='bg-secondary-gray w-full h-[2px]' 
      />
    </button>
  )
}

export default TextButton