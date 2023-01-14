import React from 'react'

import { previousWorked } from '../constants'

const PreviouslyWorked = () => {
  return (
    <section
      className='grid sm:grid-cols-4 grid-cols-2
      justify-between items-center gap-y-10
      sm:gap-x-10 gap-x-20'
    >
      {previousWorked?.map((val) => (
        <img 
          key={val?.id}
          src={val?.img} 
          alt="company logo" 
          className='w-[100%] max-w-[110px] object-contain'
        />
      ))}
    </section>
  )
}

export default PreviouslyWorked