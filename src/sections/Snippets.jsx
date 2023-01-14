import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { snippets } from '../constants'
import { TextButton, SnippetCard, SocialMedia } from '../components'
import { slideInVariants, showVariants } from '../utils/motion'

const Snippets = () => {
  return (
    <section
      id='snippet'
      className={`${styles.innerWidth} px-6
      mx-auto`}
    >
      <div
        className='md:pt-[160px] pt-[100px] 
        md:pb-[180px] pb-[80px]'
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
              <span className='text-white'>Snippets</span>
            </div>
            <h2
              className='font-poppins font-bold
              lg:text-[52px] md:text-[32px] text-[26px] 
              leading-[1.231em] text-white mt-3'
            >
              Explore my latest CodePen snippets
            </h2>
          </motion.div> 
          <motion.div
            variants={slideInVariants('tween', 0.625, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} 
          >
            <TextButton 
              text="Browse my CodePen"
              styles="font-bold text-[22px]"
            />
          </motion.div>
        </div>

        <motion.div
          variants={showVariants('tween', 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='mt-[30px] flex
          md:flex-row flex-col gap-10
          items-stretch'
        >
          {snippets?.map((val, idx) => (
            <div key={idx}>
              <SnippetCard data={val} />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={showVariants('tween', 0.75, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[rgba(255,255,255,0.3)] 
        h-[1px] w-full"
      />

      <div 
        className='pt-[40px] pb-[80px] text-white
        flex md:flex-row flex-col md:items-center
        items-start justify-between gap-5'
      >
        <motion.h2
          variants={showVariants('tween', 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="uppercase font-bold
          md:text-[20px] text-[18px]"
        >
          Or follow me on social media
        </motion.h2>
        <motion.div
          variants={showVariants('tween', 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SocialMedia />
        </motion.div>
      </div>
    </section>
  )
}

export default Snippets