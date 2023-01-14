import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { stats } from '../constants'
import { TextButton, PreviouslyWorked } from '../components'
import { slideInVariants, showVariants } from '../utils/motion'

const AboutMe = () => {
  return (
    <section 
      id='about'
      className={`${styles.innerWidth} px-6 mx-auto`}
    >
      <div
        className={`mx-auto flex lg:flex-row
        flex-col justify-between lg:gap-10 gap-0 
        md:pt-[160px] pt-[100px] md:pb-[180px] pb-[80px]`}
      >
        <motion.div
          variants={slideInVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:max-w-[540px] lg:w-1/2 w-full"
        >
          <div 
            className='font-poppins text-[20px]
            text-white font-bold uppercase'
          >
            <span className='text-[#075FE4] mr-2'>/</span>
            About me
          </div>
          <h2 
            className='font-poppins font-bold
            lg:text-[52px] md:text-[32px] text-[26px] 
            leading-[1.231em] text-white mt-3'
          >
            I've been developing websites since 2010
          </h2>
          <p
            className='mt-3 mb-[48px] text-[18px]
            leading-[1.66em] font-normal text-[#c3cad5]'
          >
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id 
            est laborum aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat.
          </p>
          <TextButton 
            text="More about me" 
            styles="font-bold text-[22px]" 
          />
        </motion.div>

        <motion.div
          variants={slideInVariants('tween', 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:max-w-[520px] lg:w-1/2 w-full"
        >
          <div 
            className='mt-[48px] text-white flex
            sm:flex-row flex-col lg:gap-0 sm:gap-10'
          >
            {stats?.map((stat) => (
              <div 
                key={stat?.id}
                className="flex items-center"
              >
                <h2 
                  className='lg:text-[76px] md:text-[58px] 
                  text-[34px] mr-[12px] font-bold'
                >
                  {stat?.value}
                </h2>
                <h3
                  className='md:text-[20px] text-[18px]
                  leading-[1.1em] font-bold'
                >
                  {stat?.title}
                </h3>
              </div>
            ))}
          </div>
          <p 
            className='mt-3 text-[18px] leading-[1.66em] 
            font-normal text-[#c3cad5]'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua ut enim ad minim veniam, quis 
            nostrud exercitation.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={showVariants('tween', 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[rgba(255,255,255,0.3)] 
        h-[1px] w-full"
      />
      <div 
        className='py-[80px] text-white
        flex lg:flex-row flex-col items-center
        justify-between gap-10'
      >
        <motion.div
          variants={showVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="uppercase font-bold
          text-[20px]"
        >
          Previously Worked On
        </motion.div>
        <motion.div
          variants={showVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <PreviouslyWorked />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe