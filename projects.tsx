// src/components/Projects.tsx
'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// --- Data for the slides ---
// We now use string paths to images in the `public` folder.
// No need to import the images anymore.
const projectsData = [
  {
    title: "Analytics Dashboard",
    description:
      "A responsive analytics dashboard built with React, Tailwind CSS, and Chart.js for data visualization.",
    image: "/images/chart.png", // Path from the `public` directory
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN application for a custom e-commerce experience with user auth and payment integration.",
    image: "/images/chart.png", // Path from the `public` directory
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS showcasing skills, projects, and services.",
    image: "/images/chart.png", // Path from the `public` directory
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-30 font-poppins">
      <div className="container m-auto">

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="w-full max-w-4xl mx-auto overflow-hidden shadow-2xl"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px] text-white">
                {/* Background Image - UPDATED */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill // Use the `fill` prop
                  className="object-cover z-0" // Use `object-cover` class for fitting
                />

                <div className="absolute inset-0 bg-[rgba(0,0,0,0.60)] z-10"></div>

                <div className="relative z-20 flex flex-col items-start justify-center h-full p-8 md:p-16 text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {project.title}
                  </h2>
                  <p className="text-base md:text-lg max-w-lg mb-8 opacity-90">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-opacity-80 transition-all duration-300"
                    >
                      Explore
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 text-white font-semibold rounded-md hover:bg-white/20 transition-all duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;