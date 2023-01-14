import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { SkillCard } from '../components'
import { slideInVariants, showVariants } from '../utils/motion'

const MySkills = () => {
  return (
    <section
      id='my-skills'
      className={`${styles.innerWidth} px-6
      mx-auto md:py-[160px] py-[100px]`}
    >
      <div>
        <motion.div
          variants={slideInVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} 
          className='font-poppins text-[20px]
          font-bold uppercase'
        >
          <span className='text-[#075FE4] mr-2'>/</span>
          <span className='text-white'>My Skills</span>
        </motion.div>
        <div className='relative'>
          <motion.h2
            variants={slideInVariants('tween', 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} 
            className='font-poppins font-bold
            lg:text-[52px] md:text-[32px] text-[26px] 
            leading-[1.231em] text-white mt-3'
          >
            My extensive list of skills
          </motion.h2>
          <motion.div
            variants={showVariants('tween', 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-[60px]"
          >
            <SkillCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MySkills