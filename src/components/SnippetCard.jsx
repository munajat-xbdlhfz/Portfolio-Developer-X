import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { TextButton } from '../components'
import { expandScaleVariants } from '../utils/motion'

const SnippetCard = ({ data }) => {
  const [onHover, setOnHover] = useState(false)

  return (
    <motion.div
      variants={expandScaleVariants(1.03)}
      animate={onHover ? "show" : "hidden"}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className='bg-primary-gray rounded-2xl
      mt-[30px] overflow-hidden'
    >
      <div className='bg-secondary-gray overflow-hidden'>
        <motion.img
          variants={expandScaleVariants(1.1)}
          animate={onHover ? "show" : "hidden"} 
          src={data?.img} 
          alt="snippets"
          className='object-contain'
        />
      </div>
      
      <div className='px-8 py-10 mb-10 md:h-[300px]'>
        <h2
          className='font-poppins text-white
          text-[22px] font-bold leading-[1.273em] 
          mb-[8px]'
        >
          {data?.title}
        </h2>
        <p
          className='font-poppins text-[#c3cad5]
          text-[18px] leading-[1.667em] mb-[24px]'
        >
          {data?.content}
        </p>
        <TextButton
          text="View Project"
          styles="uppercase font-semibold text-[16px]"
        />
      </div>
    </motion.div>
  )
}

export default SnippetCard