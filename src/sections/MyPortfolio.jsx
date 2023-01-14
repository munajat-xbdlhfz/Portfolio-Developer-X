import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { myPortfolio } from '../constants'
import { TextButton, PortfolioCard } from '../components'
import { slideInVariants } from '../utils/motion'

const MyPortfolio = () => {
  return (
    <section
      id='portfolio'
      className={`${styles.innerWidth} px-6
      mx-auto md:py-[160px] py-[100px]`}
    >
      <div
        className='flex md:flex-row flex-col
        justify-between md:gap-10 gap-5'
      >
        {myPortfolio?.map((portfolio, idx) => (
          <div
            key={portfolio?.id}
          >
            {idx === 0 ? (
              <motion.div
                variants={slideInVariants('tween', 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full"
              >
                <div
                  className='font-poppins text-[20px]
                  font-bold uppercase'
                >
                  <span className='text-[#075FE4] mr-2'>/</span>
                  <span className='text-white'>My Portfolio</span>
                </div>
                <h2
                  className='font-poppins font-bold
                  lg:text-[52px] md:text-[32px] text-[26px] 
                  leading-[1.231em] text-white mt-3 
                  sm:mb-[48px] mb-[32px]'
                >
                  Take a look at the latest projects I've done
                </h2>
                <TextButton
                  text="Browse all projects"
                  styles="font-bold text-[22px]" 
                />

                {portfolio?.data?.map((val) => (
                  <div 
                    key={val?.id}
                    className="cursor-pointer mt-[72px]"
                  >
                    <PortfolioCard data={val} />
                  </div>
                ))}
              </motion.div>
            ): (
              <motion.div
                variants={slideInVariants('tween', 0.75, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full"
              >
                {portfolio?.data?.map((val) => (
                  <div 
                    key={val?.id}
                    className="cursor-pointer"
                  >
                    <PortfolioCard data={val} />
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyPortfolio