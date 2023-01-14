import React, { useState } from 'react'
import { useMeasure } from 'react-use'
import { motion } from 'framer-motion'

import { SlideButton } from '../components'
import { mySkills } from '../constants'
import { cardSliderVariants } from '../utils/motion'

const SkillCard = () => {
  const [position, setPosition] = useState(0)
  const [ref, { width }] = useMeasure()

  const onNext = () => {
    position === mySkills.length - 1 ? setPosition(0) : setPosition(position + 1)
  }

  const onPrev = () => {
    position === 0 ? setPosition(mySkills.length - 1) : setPosition(position - 1)
  }

  return (
    <section>
      <div
        ref={ref}
        className='flex w-screen
        relative md:h-[500px] h-[350px]'
      >
        {mySkills?.map((val, idx) => (
          <motion.div
            key={idx}
            variants={cardSliderVariants(width, idx, position)}
            initial="hidden"
            animate="show"
            className='absolute overflow-hidden bg-primary-gray
            sm:w-[430px] w-[87vw] md:px-[50px] px-[40px] md:py-[100px] 
            py-[70px] rounded-3xl'
          >
            <img 
              src={val?.icon} 
              alt="icon"
              className='md:mb-[24px] mb-[12px]'
            />
            <h2 
              className='md:text-[38px] text-[24px] text-white
              font-bold md:mb-[12px] mb-[6px]'
            >
              {val?.title}
            </h2>
            <p
              className='md:mb-[40px] mb-[20px] md:text-[24px] text-[18px]
              leading-[1.58em] text-[#c3cad5]'
            >
              {val?.content}
            </p>
            <div className='bg-white h-1.5 w-14' />
          </motion.div>
        ))}
      </div>

      <div 
        className='lg:absolute flex gap-5 justify-center 
        items-center lg:-top-5 lg:right-0 lg:mt-0 mt-10'
      >
        <div onClick={() => onPrev()} >
          <SlideButton 
            direction="left" 
            buttonStyles="md:w-[88px] w-[60px] 
            md:h-[88px] h-[60px]"
            imgStyles="md:w-[30px] w-[25px] 
            md:h-[30px] h-[25px]"
          />
        </div>
        <div onClick={() => onNext()} >
          <SlideButton 
            direction="right" 
            buttonStyles="md:w-[88px] w-[60px] 
            md:h-[88px] h-[60px]"
            imgStyles="md:w-[30px] w-[25px] 
            md:h-[30px] h-[25px]"  
          />
        </div>
      </div>
    </section>
  )
}

export default SkillCard