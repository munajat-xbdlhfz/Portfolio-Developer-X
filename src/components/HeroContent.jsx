import React from "react";

import TextButton from "./TextButton";
import { heroContent } from "../constants";

const HeroContent = () => {
  return (
    <section
      className="flex md:flex-col sm:flex-row
      flex-col justify-between md:gap-0 gap-5"
    >
      {heroContent?.map((val) => (
        <div 
          key={val?.id} 
          className="flex flex-col items-start 
          justify-between"
        >
          <div>
            <h2
              className="font-poppins font-bold uppercase
              text-[18px] text-white mb-5"
            >
              {val?.title}
            </h2>
            <p
              className="font-poppins font-normal mb-8
              text-[18px] text-[#c3cad5] leading-[1.66em]"
            >
              {val?.content}
            </p>
          </div>
          
          {/* eslint-disable-next-line */}
          <TextButton 
            text={val?.buttonText} 
            styles="uppercase font-bold text-[18px]" 
          />

          <div
            className="bg-[rgba(255,255,255,0.2)] 
            h-[1px] w-full my-12 md:block hidden"
          />
        </div>
      ))}
    </section>
  );
};

export default HeroContent;
