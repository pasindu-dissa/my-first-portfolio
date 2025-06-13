// src/components/Projects.tsx
'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import React Icons
// Assuming you have these installed: npm install react-icons
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { MdOpenInNew } from "react-icons/md"; // For Live Demo (can be an "open" or "external link" icon)
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Arrow icons for navigation

// --- Data for the slides ---
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
    image: "/images/portfolio.png", // Path from the `public` directory
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Mobile App Redesign",
    description:
      "UI/UX redesign of a popular mobile application focusing on user-friendliness and modern aesthetics.",
    image: "/images/chart.png", // Path from the `public` directory
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management System",
    description:
      "A robust task management system with real-time updates and collaborative features using WebSockets.",
    image: "/images/chart.png", // Path from the `public` directory
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 font-poppins bg-black text-gray-300">
      <div className="container mx-auto">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default to 1 slide per view
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-projects',
            prevEl: '.swiper-button-prev-projects',
          }}
          pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active-dark' }}
          autoplay={{
            delay: 3500, // Slightly faster autoplay
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Responsive breakpoints
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="w-full pb-16 relative" // Added padding for pagination dots and relative for navigation buttons
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-900 shadow-md overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="relative w-full h-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay on image */}
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-4 flex-grow">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm shadow-md"
                    >
                      <MdOpenInNew className="h-5 w-5 mr-2" /> {/* React Icon for Live Demo */}
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-700 text-gray-400 font-semibold rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm shadow-md"
                    >
                      <FaGithub className="h-5 w-5 mr-2" /> {/* React Icon for GitHub */}
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom navigation buttons using React Icons */}
          <div className="swiper-button-prev-projects text-white cursor-pointer absolute top-2/5 -translate-y-1/2 left-4 z-10">
            <IoIosArrowBack className="h-8 w-8" /> {/* React Icon for Previous */}
          </div>
          <div className="swiper-button-next-projects text-white cursor-pointer absolute top-2/5 -translate-y-1/2 right-4 z-10">
            <IoIosArrowForward className="h-8 w-8" /> {/* React Icon for Next */}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;