import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { blogAndraticles } from '../constants'
import { TextButton } from '../components'
import { slideInVariants, expandScaleVariants } from '../utils/motion'

const BlogArticles = () => {
  return (
    <section
      id='blog'
      className={`${styles.innerWidth} px-6
      mx-auto md:py-[160px] py-[100px]`}
    >
      <div
        className='flex md:flex-row flex-col
        gap-10'
      >
        <motion.div
          variants={slideInVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="sticky top-0"
        >
          <div
            className='font-poppins text-[20px]
            font-bold uppercase'
          >
            <span className='text-[#075FE4] mr-2'>/</span>
            <span className='text-white'>Blog & Articles</span>
          </div>
          <h2
            className='font-poppins font-bold
            lg:text-[52px] md:text-[32px] text-[26px] 
            leading-[1.231em] text-white mt-3 
            md:mb-[48px] mb-[32px]'
          >
            Check out my latest articles and tutorials
          </h2>
          <div className='mb-[32px]'>
            <TextButton
              text="Browse all articles"
              styles="font-bold text-[22px]" 
            />
          </div>
        </motion.div>

        <motion.div
          variants={slideInVariants('tween', 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-end"
        >
          {blogAndraticles?.map((val, idx) => (
            <div
              key={val?.id}
            >
              <motion.div
                variants={expandScaleVariants(1.03)}
                initial="hidden"
                whileHover="show"
                className='cursor-pointer'
              >
                <div
                  className='font-poppins md:text-[18px]
                  text-[16px] font-semibold uppercase'
                >
                  <span className='text-[#c3cad5] mr-2'>
                    {val?.date}
                  </span>
                  <span className='text-[#075FE4] mr-2'>/</span>
                  <span className='text-[#c3cad5]'>
                    {val?.tag}
                  </span>
                </div>

                <h2
                  className='md:mt-[12px] mt-[10px] text-white
                  lg:text-[34px] md:text-[28px] text-[22px] font-bold leading-[1.441em]'
                >
                  {val?.title}
                </h2>
              </motion.div>
              {idx !== blogAndraticles.length - 1 ? (
                <div
                  className="bg-[rgba(255,255,255,0.2)] 
                  h-[1px] w-full md:my-12 my-10"
                />
              ): null}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogArticles