import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { profile_footer } from '../assets'
import { SocialMedia, TextButton } from '../components'
import { slideInVariants } from '../utils/motion'

const Footer = () => {
  return (
    <footer
      className={`${styles.innerWidth} px-6
      mx-auto md:pt-[100px] pt-[80px] pb-10`}
    >
      <div
        className='flex lg:flex-row
        flex-col justify-between gap-10 pb-20'
      >
        <motion.div
          variants={slideInVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className='flex items-center gap-5
          mb-[20px]'>
            <img 
              src={profile_footer} 
              alt="profile"
              className='rounded-full md:w-[132px] 
              w-[80px] object-contain' 
            />
            <div>
              <h2
                className='font-poppins text-white
                lg:text-[34px] md:text-[28px] text-[22px]
                font-bold'
              >
                John Carter
              </h2>
              <span
                className='font-poppins text-[#8895aa]
                lg:text-[24px] md:text-[22px] text-[20px]'
              >
                Head of Engineering at Google
              </span>
            </div>
          </div>
          <SocialMedia />
        </motion.div>

        <motion.div
          variants={slideInVariants('tween', 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TextButton 
            text="Get in touch"
            styles="font-bold lg:text-[52px] 
            md:text-[32px] text-[26px]"
          />
          <div
            className='flex sm:flex-row 
            flex-col mt-[30px] gap-8'
          >
            <div>
              <h2
                className='font-poppins text-[#c3cad5]
                uppercase md:text-[16px] text-[14px] 
                font-bold'
              >
                Email Me:
              </h2>
              <TextButton 
                text="contact@john.com"
                styles="font-bold text-[20px]"
              />
            </div>
            <div>
              <h2
                className='font-poppins text-[#c3cad5]
                uppercase text-[14px] md:text-[16px] 
                font-bold'
              >
                Call Me:
              </h2>
              <TextButton 
                text="(414) 977 - 048"
                styles="font-bold text-[20px]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="bg-[rgba(255,255,255,0.2)] 
        h-[1px] w-full"
      />

      <div 
        className='p-5 flex justify-between
        lg:flex-row flex-col lg:items-start items-center gap-5'
      >
        <motion.div
          variants={slideInVariants('tween', 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='font-poppins text-white 
          text-[18px] font-normal flex flex-wrap
          lg:justify-start justify-center'
        >
          <a href='/#' className='mr-5 cursor-pointer hover:text-[#c3cad5]'>Home</a>
          <a href='/#about' className='mr-5 cursor-pointer hover:text-[#c3cad5]'>About</a>
          <a href='/#portfolio' className='mr-5 cursor-pointer hover:text-[#c3cad5]'>Portfolio</a>
          <a href='/#blog' className='mr-5 cursor-pointer hover:text-[#c3cad5]'>Blog</a>
          <a href='/#contact' className='cursor-pointer hover:text-[#c3cad5]'>Contact</a>
        </motion.div>

        <motion.div
          variants={slideInVariants('tween', 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='font-poppins text-white 
          text-[18px] font-normal lg:text-right
          text-center'
        >
          Copyright © Developer X | Design by {" "}
          <a
            href="https://brixtemplates.com/"
            className="hover:text-[#c3cad5] underline"
          >
            BRIX Templates
          </a>
          {" "} - Powered by {" "}
          <a
            href="https://webflow.com/"
            className="hover:text-[#c3cad5] underline"
          >
            Webflow
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer