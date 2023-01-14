import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { TextButton, TestimonialSlide } from '../components'
import { slideInVariants, showVariants } from '../utils/motion'

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className={`${styles.innerWidth} px-6
      mx-auto md:py-[160px] py-[100px]
      relative`}
    > 
      <div
        className='flex md:flex-row flex-col
        justify-between md:items-end items-start
        gap-5'
      >
        <motion.div
          variants={slideInVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <div
            className='font-poppins text-[20px]
            font-bold uppercase'
          >
            <span className='text-[#075FE4] mr-2'>/</span>
            <span className='text-white'>Testimonials</span>
          </div>
          <h2
            className='font-poppins font-bold
            lg:text-[52px] md:text-[32px] text-[26px] 
            leading-[1.231em] text-white mt-3'
          >
            What the clients say about my work
          </h2>
        </motion.div> 
        <motion.div
          variants={slideInVariants('tween', 0.625, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} 
        >
          <TextButton 
            text="Get in touch"
            styles="font-bold text-[22px]"
          />
        </motion.div>
      </div>

      <motion.div
        variants={showVariants('tween', 0.75, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} 
      >
        <TestimonialSlide />
      </motion.div>
    </section>
  )
}

export default Testimonials