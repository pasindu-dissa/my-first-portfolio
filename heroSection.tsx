// src/components/HeroSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub, FaFacebook } from 'react-icons/fa6';
import profileImg from '../app/assets/me.png'; // Adjust path as needed
import { useMediaQuery } from '@/hooks/useMediaQuery'; // Import the custom hook

const HeroSection: React.FC = () => {
  // Replace '768px' with your `mobileLg` breakpoint for precision
  const isMobile = useMediaQuery('(max-width: 448px)');
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        const scrollY = window.scrollY;
        // The fade will happen over the first 400px of scrolling
        const newOpacity = Math.max(0, 1 - scrollY / 400);
        setOpacity(newOpacity);
      } else {
        // On larger screens, ensure opacity is always 1
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]); // Rerun the effect if the screen size changes across the breakpoint

  return (
    <section id="home">
      <div
        className="flex justify-between 
                   mobile:max-mobileLg:h-220 mobile:max-mobileLg:bg-fixed
                   mobile:max-mobileLg:bg-[url(./assets/me.png)] mobile:max-mobileLg:bg-cover 
                   mobile:max-mobileLg:bg-center mobile:max-mobileLg:bg-no-repeat
                   tab:max-laptop:block"
      >
        {/*IMAGE*/}
        <Image
          src={profileImg}
          alt="profile-image"
          className=" mobile:max-mobileLg:hidden
                      mobileLg:max-tab:w-100 mobileLg:max-tab:h-101 mobileLg:max-tab:relative mobileLg:max-tab:right-35
                      tab:max-laptop:w-110 tab:max-laptop:h-111 tab:max-laptop:relative tab:max-laptop:right-40
                      medium:max-lg:w-110 medium:max-lg:h-111 medium:max-lg:relative medium:max-lg:right-10
                      lg:max-laptop:w-110 lg:max-laptop:h-111 lg:max-laptop:relative lg:max-laptop:right-0
                      laptop:w-130 laptop:h-131 
                      pt-1"
        />
        {/*ABOUT-ME*/}
        <div
          // Apply the dynamic opacity and a transition for smoothness
          style={{ opacity }}
          className="flex flex-col items-end
                     gap-5
                     laptop:gap-8
                     mobile:max-mobileLg:backdrop-brightness-50
                     mobile:max-mobileLg:px-5
                     mobileLg:max-tab:absolute mobileLg:max-tab:top-25 mobileLg:max-tab:right-5 mobileLg:max-tab:w-3/5
                     tab:max-laptop:absolute tab:max-laptop:top-25 tab:max-laptop:right-15 tab:max-laptop:w-3/5
                     transition-opacity duration-300"
        >
          <div
            className="pt-3 text-right font-antonio font-light
                       mobile:max-mobileLg:text-white 
                       mobile:max-mobileLg:text-[85px] mobile:max-mobileLg:leading-22
                       mobile:text-[60px] mobile:leading-13.5 mobile:pb-2
                       tab:text-[70px] tab:leading-17
                       laptop:text-[85px] laptop:pt-8 laptop:pb-2 laptop:leading-20
                       tracking-tight bg-gradient-to-b from-white to-neutral-600 inline-block text-transparent bg-clip-text"
          >
            <span className=" mobile:max-mobileLg:text-[60px] mobile:text-[40px] tab:text-[50px] laptop:text-[70px]">
              I'm
            </span>
            <span className=" mobile:max-mobileLg:text-[70px] mobile:text-[50px] tab:text-[60px] laptop:text-[80px]">
              {' '}
              Pasindu
            </span>
            <br />
            <span className="mobile:max-mobileLg:text-[60px] mobile:text-[42px] tab:text-[52px] laptop:text-[62px]">
              FULL-STACK
            </span>
            <b className=" font-extrabold"> DEVELOPER</b>
            <br />&
            <span className="mobile:max-mobileLg:text-[65px] mobile:text-[42px] tab:text-[52px] laptop:text-[62px]">
              {' '}
              creative
            </span>
            <br />
            <b className=" font-extrabold">DESIGNER</b>
          </div>
          <div className=" flex text-3xl gap-4">
            <FaLinkedinIn className=" cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
            <FaGithub className=" cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
            <FaFacebook className=" cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
          </div>
          <div>
            <span
              className=" font-poppins font-medium text-[19px] p-1 mobile:max-mobileLg:py-0.25 
                         bg-white text-black border-2 border-white
                         cursor-pointer transition delay-50 duration-200 ease-in-out
                         hover:bg-black hover:text-white hover:border-2 hover:te"
            >
              my resume
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;