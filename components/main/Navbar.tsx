import React from 'react'
import Image from 'next/image';

// Define the socials array
const socials = [
    { name: 'GitHub', src: '/github-mark/github-mark-white.png', url: 'https://github.com/guptasuraj125' },
    { name: 'LinkedIn', src: '/facebook.svg', url: 'https://linkedin.com/in/username' },
    { name: 'Twitter', src: '/instagram.svg', url: 'https://www.instagram.com/suraj.gupta2006/profilecard/?igsh=MWpuNjNibHR3Z2traw==' },
    // Add more social media links here as needed
];

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/Nav_logo.webp"
                        alt="logo"
                        width={50}
                        height={50}
                        className="cursor-pointer hover:animate-slowspin"
                        style={{ borderRadius: '50%' }}
                    />

                    <span className='font-bold ml-{10px} hidden md:block text-gray-300'>  WebChain Dev </span>
                </a>

                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href='#about-me' className='cursor-pointer'>About me</a>
                        <a href='#skills' className='cursor-pointer'>Skills</a>
                        <a href='#projects' className='cursor-pointer'>Projects </a>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    {/* Loop through socials and display each icon */}
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                                className="hover:scale-110 transition-all duration-300"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
