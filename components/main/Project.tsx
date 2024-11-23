import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/Screenshot (2).png'
          title='Spotify Clone WebPlayer'
          description=' Lorem Ipsum is a placeholder  text commonly used  Cicero, with words altered, added, and removed in graphic design, publishing, and web development to fill empty spaces in .'

        />


        <ProjectCard
          src='/CardImage.png'
          title='Interactive website card'
          description='  malorum, a 1st-centuman and philosopher  Cicero, with words altered, added, and removed Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.'

        />


        <ProjectCard
          src='/Screenshot (1).png'
          title='Space themed website'
          description=' Lorem Ipsum  statesman and philosopher Cicero, with words  Cicero, with words altered, added, and removed altered, added, and removed to make it nonsensical and improper Latin.'

        />
      </div>

    </div>
  )
}

export default Project