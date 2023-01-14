import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { arrow_right } from '../assets'
import { TextButton } from '../components'
import { slideInVariants } from '../utils/motion'

const WorkingTogether = () => {
  return (
    <section
      id='contact'
      className={`${styles.innerWidth} px-6
      mx-auto md:py-[160px] py-[100px]`}
    >
      <div
        className='flex md:flex-row
        flex-col gap-12'
      >
        <motion.div
          variants={slideInVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <div className='bg-white h-1.5 w-36 mb-8' />
          <div 
            className='font-poppins font-bold
            lg:text-[52px] md:text-[32px] text-[26px] 
            leading-[1.231em] text-white'
          >
            <h2>
              Interested in working together?
            </h2>
            <div className='flex items-end gap-3'>
              <h2>Let's talk</h2>
              <img 
                src={arrow_right} 
                alt="arrow right"
                className='md:w-[30px] w-[25px] 
                md:h-[30px] h-[25px] invert 
                object-contain'
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInVariants('tween', 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-[40px]
          md:w-1/2 w-full"
        >
          <div>
            <input 
              type="text"
              placeholder='Enter your name'
              className='font-poppins bg-transparent
              focus:outline-none font-bold
              text-[20px] text-white placeholder:text-white
              pb-[26px] w-full'
            />
            <div
              className="bg-[rgba(255,255,255,0.2)] 
              h-[1px] w-full"
            />
          </div>

          <div>
            <input 
              type="email"
              placeholder='Your email address'
              className='font-poppins bg-transparent
              focus:outline-none font-bold
              text-[20px] text-white placeholder:text-white
              pb-[26px] w-full'
            />
            <div
              className="bg-[rgba(255,255,255,0.2)] 
              h-[1px] w-full"
            />
          </div>

          <div>
            <textarea 
              placeholder='Describe your project'
              className='font-poppins bg-transparent
              focus:outline-none font-bold
              text-[20px] text-white placeholder:text-white
              pb-[16px] w-full h-32'
            />
            <div
              className="bg-[rgba(255,255,255,0.2)] 
              h-[1px] w-full"
            />
          </div>

          <div className='mt-[15px]'>
            <TextButton
              text="Contact me"
              styles="text-[20px] font-bold"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkingTogether