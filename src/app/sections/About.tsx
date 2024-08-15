'use client'

// CONSTANTS
import { useState } from "react";
import { useEffect } from "react";

const About = () => {
  return (
    <section id="about">
      <div className="flex justify-between items-center">
        <img className="w-1/3" src="../images/sections/dogprints.png"></img>
        <h1 className="text-4xl md:text-7xl font-display text-section-brown">about</h1>
        <img className="w-1/3" src="../images/sections/dogprints.png"></img>
      </div>
      <div className="flex md:flex-row flex-col mx-4 md:mx-24 items-center">
        <h2 className="text-nav-brown text-center text-pretty font-body md:w-1/2 text-xl md:text-3xl">
          LazyHacks is a hackathon based on the theme of “laziness”. It is a 
          hackathon organized by high schoolers, for high schoolers, and aims 
          to inspire creativity, innovation, and collaboration through the shared 
          lazy mindset of youth.
        </h2>
        <div className="md:w-[730px] md:h-[500px] w-[365px] h-[250px] relative">
          <img className="md:w-[350px] md:h-[350px] w-[175px] h-[175px] absolute z-40 md:left-0 left-[20px] bottom-[20px] md:bottom-[40px]" src="../images/about/sloth-on-chair.png"></img>
          <img className="md:w-[500px] md:h-[500px] w-[250px] h-[250px] absolute right-0 top-0" src="../images/about/fireplace.png"></img>
        </div>
      </div>
    </section>
  );
};

export default About