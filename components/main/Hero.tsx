import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-380px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      {/* Content that appears above the video */}
      <div className="relative z-10 text-white text-center mt-20">
       {/*  <h1 className="text-4xl font-bold">Explore the Universe</h1>
        <p className="text-xl mt-4">Discover the wonders of the cosmos</p> */}
      </div>
    </div>
    
  )
}

export default Hero;

