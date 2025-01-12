import React from 'react';
import BackgroundVideo from '@/components/BackgroundVideo'; // Adjust path as needed
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero"; // Ensure this import path is correct
import Project from "@/components/main/Project";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-screen w-full relative">
      {/* Background Video */}
     

      <div className="flex flex-col h-full gap-20 relative z-10"> 
        {/* Added relative z-10 to ensure the content is on top of the video */}
        
        <Hero />
        <Skills />
        <Encryption />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
