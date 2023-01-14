import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { profile, arrow_down } from '../assets'
import { SocialMedia, HeroContent } from '../components'
import { downButtonVariants, slideInVariants, imageVariants } from '../utils/motion'

const Hero = () => {
  return (
    <section
      id='home'
      className={`px-6 md:pt-[100px] pt-[50px]`}
    >
      <div
        className={`${styles.innerWidth} mx-auto
        flex flex-col justify-end`}
      >
        <div 
          className='flex md:flex-row flex-col 
          justify-between gap-5 z-10 lg:pb-[100px] 
          md:pb-[300px]'
        >
          <motion.div
            variants={slideInVariants('tween', 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='md:w-[50%] w-full lg:mt-[70px]'
          >
            <div className='bg-white h-1.5 w-36 mb-8' />
            <h2
              className='font-poppins font-bold lg:text-[76px]
              md:text-[58px] sm:text-[40px] text-[34px] 
              leading-[1.13em] text-white mb-5'
            >
              I'm John, a <br className="lg:block hidden" /> {"  "}
              Web Developer
            </h2>
            <p 
              className='font-poppins font-normal text-[#c3cad5]
              text-[18px] leading-[1.66em] lg:max-w-lg'
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
              ullamcorper quis id elementum convallis lacus gravida.
            </p>
            <a href='#about'>
              <button
                className='bg-[#075FE4] w-[80px] h-[80px] 
                rounded-full my-[50px]'
              >
                <motion.img
                  variants={downButtonVariants}
                  whileInView="show"
                  viewport={{ once: true }}
                  src={arrow_down}
                  alt="arrow down"
                  className='m-auto invert w-[30px] h-[30px]' 
                />
              </button>
            </a>
          </motion.div>

          <motion.div
            variants={slideInVariants('tween', 0.75, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='md:w-[350px] w-full flex
            flex-col'
          >
            <HeroContent />
            <div
              className="bg-[rgba(255,255,255,0.2)] 
              h-[1px] w-full md:hidden block my-12"
            />
            <div>
              <h2 className='font-poppins font-bold 
              text-[18px] text-white mb-5'>
                FOLLOW ME
              </h2>
              <SocialMedia />
            </div>
          </motion.div>
        </div>

        <div
          className='z-0 overflow-hidden md:absolute
          flex items-center lg:justify-center lg:ml-[150px]
          md:justify-start justify-center'
        >
          <motion.img
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} 
            src={profile} 
            alt="profile"
            className='lg:w-[100%] w-[70%] 
            lg:h-[100%] h-[70%] object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero