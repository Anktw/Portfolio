"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOnScroll = () => {
    if (window.innerWidth < 768 && isOpen) {
      setIsOpen(false);
    }
  };

  const closeMenuOnResize = () => {
    if (window.innerWidth >= 768 && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeMenuOnScroll);
    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll);
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, [isOpen]);

  return (
    <header className="w-full shadow-md bg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Ankit Tiwari</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
        <Link href="/projects" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">Projects</Link>
        <Link href="/resume" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">Resume</Link>
        <Link href="/blog" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">Blog</Link>
        <Link href="/about" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">About</Link>
        <Link href="/contact" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">Contact</Link>
        </nav>

        {/* Burger Menu Button */}
        <button
          className="relative w-8 h-8 md:hidden focus:outline-none z-50"
          onClick={toggleMenu}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-5">
            <span
              className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 md:w-64  backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-50 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">Close menu</span>
        </button>

        {/* Menu Links */}
        <nav className="flex flex-col items-center mt-20 px-8 space-y-4">
        <Link href="/projects" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">
            Projects
          </Link>
          <Link href="/resume" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">
            Resume
          </Link>
          <Link href="/blog" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">
            Blog
          </Link>
          <Link href="/about" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">
            About
          </Link>
          <Link href="/contact" className="text-lg hover:underline hover:scale-105 hover:transition-all hover:duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
