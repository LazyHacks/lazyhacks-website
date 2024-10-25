"use client"

import Image from "next/image";
import Faq from "./sections/Faq";
import About from "./sections/About"
import Sponsors from "./sections/Sponsors"
import ImageCycle from "./sections/ImageCycle"
import Socials from "./sections/Socials"

// CONSTANTS
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full">
        <nav className={`flex z-50 py-2 ps-5 pe-8 items-top md:items-center justify-between box-border overflow-x-hidden w-[100%] max-w-[100%] px-3 fixed left-0 top-0 transition-colours duration-300 ${isScrolled ? "bg-nav-background-brown backdrop-blur-lg bg-opacity-50" : ""}`}> 
          {/* add '' to className above for sticky navbar */}
          <div className="flex">
            <a href="#"><img
              className="h-[100px] w-[80px] lg:w-[100px] object-contain duration-200 hover:scale-105 ease-out"
              src="./images/nav/sloth_logo.PNG"
            ></img></a>
          </div>
          <div>
            {/* Hamburger Icon */}
            <div className="md:hidden flex justify-end items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-nav-brown focus:outline-none"
              >
                <svg
                  className="w-6 h-6 my-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Navbar Links */}
            <div className={`md:flex md:max-h-screen overflow-hidden md:overflow-visible transition-[max-height] duration-300 ease-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
              <ul className="flex flex-col items-end md:items-center md:flex-row ">
                <li className="mb-4 md:mb-0">
                  <a href="#about" className="relative group">
                    <img
                      className="hidden md:flex w-[7.5rem] mx-5 transition-transform duration-200 transform group-hover:scale-105 ease-out"
                      src="./images/nav/about_pillow.png"
                    ></img>
                    <h3 className="hidden md:block absolute text-lg lg:text-xl font-body text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 duration-200 ease-out">
                      about
                    </h3>
                    <span className="block md:hidden text-nav-brown text-xl font-display hover:underline">
                      about
                    </span>
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a href="#faq" className="relative group">
                    <img
                      className="hidden md:flex w-[7.5rem] mx-5 transition-transform duration-200 transform group-hover:scale-105 ease-out"
                      src="./images/nav/faq_pillow.png"
                    ></img>
                    <h3 className="hidden md:block absolute text-lg lg:text-xl font-body text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 duration-200 ease-out">
                      faq
                    </h3>
                    <span className="block md:hidden text-nav-brown text-xl font-display hover:underline">
                      faq
                    </span>
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a href="#sponsors" className="relative group">
                    <img
                      className="hidden md:flex w-[7.5rem] mx-5 transition-transform duration-200 transform group-hover:scale-105 ease-out"
                      src="./images/nav/sponsors_pillow.png"
                    ></img>
                    <h3 className="hidden md:block absolute text-lg lg:text-xl font-body text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 duration-200 ease-out">
                      sponsors
                    </h3>
                    <span className="block md:hidden text-nav-brown text-xl font-display hover:underline">
                      sponsors
                    </span>
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a href="#socials" className="relative group">
                    <img
                      className="hidden md:flex w-[7.5rem] mx-5 transition-transform duration-200 transform group-hover:scale-105 ease-out"
                      src="./images/nav/socials_pillow.png"
                    ></img>
                    <h3 className="hidden md:block absolute text-lg lg:text-xl font-body text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 duration-200 ease-out">
                      socials
                    </h3>
                    <span className="block md:hidden text-nav-brown text-xl font-display hover:underline">
                      socials
                    </span>
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdMwYqJtKshNWqJmlGHsezRzH_iovYAbyq3CdQQmr6kpgUVKw/viewform?usp=sf_link" className="relative group">
                    <img
                      className="hidden md:flex w-[7.5rem] mx-5 transition-transform duration-200 transform group-hover:scale-105 ease-out"
                      src="./images/nav/apply_pillow.png"
                    ></img>
                    <h3 className="hidden md:block absolute text-lg lg:text-xl font-body text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 duration-200 ease-out">
                      apply!
                    </h3>
                    <span className="block md:hidden text-nav-brown text-xl font-display hover:underline">
                      apply!
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* HOME section */}
        <div className="flex flex-col items-center text-center justify-center h-[90vh] pt-64 px-8" id="apply">
          <h1 className="row font-display text-4xl text-welcome-text">
            welcome to...
            {/* <img className="w-[40rem] my-5" src="./images/home/sloth_logo_welcome_800x300.png" alt="LazyHacks logo" /> */}
            <ImageCycle />
          </h1>
          <p className="font-body text-xl text-welcome-text">
            December 7th, 2024 • 8:00 AM – 11:00 PM • In person @ Nokia, Ottawa
          </p>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdMwYqJtKshNWqJmlGHsezRzH_iovYAbyq3CdQQmr6kpgUVKw/viewform?usp=sf_link" className="relative group mt-5">
            <img
              className="w-56 transition-transform duration-200 transform group-hover:scale-105 ease-out"
              src="./images/nav/apply_pillow.png"
            ></img>
            <span className="w-5/6 absolute text-xl font-body text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center duration-200 group-hover:scale-105 ease-out">
              applications open now!
            </span> 
          </a>
        </div>

        {/* FAQ section */}
        <About />
        
        {/* FAQ section */}
        <Faq />

        <Sponsors />

        <Socials />
      </main>

      <footer className="flex flex-col items-center justify-center w-full h-auto pt-16 pb-5">
        <p className="mb-4 font-display text-nav-brown text-lg">made with love</p>
        <div className="grid grid-cols-2">
          <a
            href="https://www.linkedin.com/in/vickie-chen0728/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/footer/footer-vickie.png"
              alt="Vickie"
              className="h-16 w-16 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ariel-liu-056500297/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/footer/footer-ariel.png"
              alt="Ariel"
              className="h-16 w-16 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/skyler-ma-3372892a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/footer/footer-skyler.png"
              alt="Skyler"
              className="h-16 w-16 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/karan-chawla-dora/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/footer/footer-karan.png"
              alt="Karan"
              className="h-16 w-16 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
