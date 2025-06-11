// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // We'll use this for the avatar
import { BsMoonStarsFill } from 'react-icons/bs';
import {
  HiMenu,
  HiX,
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineCollection,
  HiOutlineBriefcase,
  HiOutlineLogout,
} from 'react-icons/hi';

// --- Updated navLinks array to include icons ---
const navLinks = [
  { name: 'home', href: '#home', icon: HiOutlineHome },
  { name: 'skills', href: '#skills', icon: HiOutlineCog },
  { name: 'services', href: '#services', icon: HiOutlineBriefcase },
  { name: 'projects', href: '#projects', icon: HiOutlineCollection },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
            <HiMenu />
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Menu Card */}
      <div
        className={`fixed top-5 right-5 h-3/4 w-4/5 max-w-sm bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-[120%]'
        }`}
      >
        {/* Menu Header with Close Button */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
             {/* This is the updated part */}
            <div>
              <Link href="#about" onClick={closeMenu}>
                <p className="font-semibold text-white hover:underline cursor-pointer">
                  Pasindu Dissanayake
                </p>
              </Link>
            </div>
          </div>
          <button onClick={closeMenu} aria-label="Close menu" className="text-3xl text-white/80 hover:text-white">
            <HiX />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-4 p-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                <link.icon className="text-xl" />
                <span className="text-lg">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Link */}
        <div className="mt-auto">
          <Link
            href="#connect"
            onClick={closeMenu}
            className="flex items-center gap-4 p-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            <HiOutlineLogout className="text-xl" />
            <span className="text-lg">Let's Connect</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;