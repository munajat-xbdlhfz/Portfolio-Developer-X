import React from 'react'

import { socialMedia } from '../constants'

const SocialMedia = () => {
  return (
    <div
      className="flex items-center"
    >
      {socialMedia?.map((val, idx) => (
        <a 
          key={val?.id}
          href={val?.link}
        >
          <img 
            src={val?.icon} 
            alt="social media"
            className={`w-[25px] h-[25px] 
            object-contain invert
            hover:invert-[50%]
            ${idx === socialMedia.length - 1 ? "mr-0" : "mr-5"}
            `} 
          />
        </a>
      ))}
    </div>
  )
}

export default SocialMedia