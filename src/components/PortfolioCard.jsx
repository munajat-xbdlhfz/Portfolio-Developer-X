import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { expandScaleVariants } from '../utils/motion'

const PortfolioCard = ({ data }) => {
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
      <div
        className='flex justify-end gap-x-5 p-7'
      >
        {data?.tags?.map((tag, idx) => (
          <div 
            key={idx}
            className="bg-secondary-gray lg:text-[18px]
            text-[16px] p-[10px] rounded-xl
            font-bold text-white" 
          >
            {tag}
          </div>
        ))}
      </div>
      
      <div className='px-7'>
        <img 
          src={data?.icon} 
          alt="icon portfolio"
          className='w-[150px] mt-[30px] object-contain'
        />
        <h2
          className='mt-[20px] font-poppins font-bold
          lg:text-[34px] md:text-[28px] text-[22px] 
          leading-[1.231em] text-white'
        >
          {data?.firstTitle} <br className='lg:block hidden' /> {" "}
          {data?.secondTitle}
        </h2>
      </div>

      <motion.img
        variants={expandScaleVariants(1.1)}
        animate={onHover ? "show" : "hidden"}
        src={data?.img} 
        alt="portfolio image"
        className='w-[100%] h-[100%] object-contain' 
      />
    </motion.div>
  )
}

export default PortfolioCard