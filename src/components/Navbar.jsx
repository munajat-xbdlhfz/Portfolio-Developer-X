import React, { useState } from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { navLinks } from '../constants'
import { developer_x, menu, close } from '../assets'
import { navVariants, menuVariants, menuLinkVariants, expandScaleVariants } from '../utils/motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`px-6 py-10 relative`}
    >
      <div
        className={`${styles.innerWidth} mx-auto
        flex justify-between gap-8`}
      >
        <motion.img
          variants={expandScaleVariants(1.1)}
          initial="hidden"
          whileHover="show"
          src={developer_x} 
          alt="developer x"
          className='w-[200px] h-full object-contain cursor-pointer'
        />

        <ul 
          className='list-none lg:flex hidden justify-end
          items-center flex-1'
        >
          {navLinks?.map((nav, idx) => (
            <li
              key={nav?.id}
              className={`font-poppins font-normal
              cursor-pointer text-[20px] text-white
              ${idx === navLinks.length - 1 ? "mr-0" : "mr-10"}
              hover:text-secondary-white`}
            >
              <a href={`#${nav?.id}`}>{nav?.title}</a>
            </li>
          ))}
        </ul>

        <div 
          className='lg:hidden flex flex-1
          justify-end items-center'
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        <motion.div 
          variants={menuVariants}
          initial={false}
          animate={toggle ? "show" : "hidden"}
          className='bg-[#2D343F] fixed top-0
          left-0 w-full h-screen -z-10'
        >
          <motion.ul
            variants={menuLinkVariants}
            initial={false}
            animate={toggle ? "show" : "hidden"}
            className='list-none flex flex-col py-[150px]
            items-center flex-1 gap-5'
          >
            {navLinks?.map((nav, idx) => (
              <li
                key={nav?.id}
                className="font-poppins font-bold
                cursor-pointer text-[50px] text-white"
                onClick={() => setToggle((prev) => !prev)}
              >

                <a href={`#${nav?.id}`}>
                  {nav?.title}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar