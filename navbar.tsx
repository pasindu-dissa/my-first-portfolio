// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BsMoonStarsFill } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';

// It's good practice to manage links in an array
const navLinks = [
  { name: 'home', href: '#home' },
  { name: 'skills', href: '#skills' },
  { name: 'services', href: '#services' },
  { name: 'projects', href: '#projects' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="font-poppins relative z-50">
      <div className="flex justify-between items-center min-[900px]:text-xl py-3">
        {/* Left Side: Name */}
        <h1 className="cursor-pointer hover:underline hover:underline-offset-5 hover:decoration-2">
          <Link href="#about">Pasindu Dissanayake</Link>
        </h1>

        {/* Desktop Menu (Visible > 700px) */}
        <ul className="hidden min-[701px]:flex gap-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer opacity-50 transition-opacity duration-200 hover:opacity-100"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden min-[701px]:flex items-center gap-6">
          <BsMoonStarsFill className="cursor-pointer" />
          <Link
            href="#connect"
            className="border-2 p-1 cursor-pointer transition-all duration-200 ease-in-out hover:bg-white hover:border-white hover:text-black"
          >
            let's connect
          </Link>
        </div>

        {/* Hamburger Icon (Visible <= 700px) */}
        <div className="flex min-[701px]:hidden items-center">
          <button
            onClick={toggleMenu}
            aria-label="Open menu"
            className="text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu with Glassmorphism Effect --- */}
      <div
        className={`fixed inset-0 w-full h-full transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-lg"
          onClick={closeMenu}
        ></div>

        {/* Menu Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <ul className="flex flex-col items-center gap-8 text-2xl">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="cursor-pointer opacity-80 transition-opacity duration-200 hover:opacity-100"
              >
                <Link href={link.href} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col items-center gap-8">
            <BsMoonStarsFill className="cursor-pointer text-2xl" />
            <Link
              href="#connect"
              onClick={closeMenu}
              className="border-2 p-2 px-4 cursor-pointer transition-all duration-200 ease-in-out bg-white text-black hover:bg-transparent hover:text-white"
            >
              let's connect
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;