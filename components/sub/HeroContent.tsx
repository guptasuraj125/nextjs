'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image' // Import Image from next/image



const HeroContent = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>FullStack Developer Portfolio</h1>
        </motion.div>

        <motion.div 
          variants={slideInFromRight(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >   
          <span> Providing <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>{" "}
            the best</span> {""}
            project exprience 
            </span>
        </motion.div>
        
        <motion.p
          variants={slideInFromRight(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromRight(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>

      {/* Add motion for image container */}
      <motion.div 
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
      >
        <Image 
          src="/mainIconsdark.svg"
          alt="work Icons"
          width={650}  // Set the width for the image
          height={650} // Set the height for the image
          priority // You can use priority to load the image faster
        />
      </motion.div>

     
    </motion.div>
  );
};

export default HeroContent;
