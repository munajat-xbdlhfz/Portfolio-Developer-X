import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { testimonial } from '../constants'
import { SlideButton } from '../components'
import { testimonialSliderVariants } from '../utils/motion'

const TestimonialSlide = () => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const prev = () => {
        setDirection(-1)
        setIndex((index + testimonial.length - 1) % testimonial.length)
    };

    const next = () => {
        setDirection(1)
        setIndex((index + 1) % testimonial.length);
    };

    return (
        <div className='mt-[30px]'>
            <div className='flex justify-center mt-8'>
                <div
                    className={`w-full md:h-[500px] 
                    sm:h-[137vh] h-[120vh] inline-block
                    relative overflow-hidden`}
                >
                    <AnimatePresence custom={direction}>
                        <motion.div
                            key={index}
                            variants={testimonialSliderVariants(direction)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            custom={direction}
                            className='flex absolute
                            md:flex-row flex-col gap-5 
                            w-full h-full md:justify-between'
                        >
                            <div
                                className='md:min-h-[492px]
                                lg:w-[500px]'
                            >
                                <img 
                                    src={testimonial[index]?.img} 
                                    alt="people"
                                    className='w-[100%] h-[100%]
                                    object-cover rounded-3xl' 
                                />
                            </div>
                            <div
                                className='lg:max-w-[638px]'
                            >
                                <img 
                                    src={testimonial[index]?.icon} 
                                    alt="work logo"
                                    className='w-[150px] object-contain
                                    invert-[50%] mb-[40px]'
                                />
                                <p
                                    className='font-poppins lg:text-[34px]
                                    md:text-[28px] text-[22px] text-white
                                    font-bold leading-[1.441em] mb-[48px]'
                                >
                                    {testimonial[index]?.content}
                                </p>
                                <div
                                    className='font-poppins text-[22px]
                                    font-bold uppercase'
                                >
                                    <span className='text-[#075FE4] mr-2'>/</span>
                                    <span className='text-white'>{testimonial[index]?.name}</span>
                                </div>
                                <h2
                                    className='font-poppins text-[#c3cad5]
                                    text-[20px] uppercase'
                                >
                                    {testimonial[index]?.title}
                                </h2>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className='flex gap-5 mt-5 absolute bottom-0 right-0'>
                        <div onClick={prev} className="z-10">
                            <SlideButton 
                                direction="left"
                                buttonStyles="w-[60px] h-[60px]"
                                imgStyles="w-[25px] h-[25px]"
                            />
                        </div>
                        <div onClick={next} className="z-10">
                            <SlideButton 
                                direction="right"
                                buttonStyles="w-[60px] h-[60px]"
                                imgStyles="w-[25px] h-[25px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSlide