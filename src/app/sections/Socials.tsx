'use client'

// CONSTANTS
import { useState } from "react";
import { useEffect } from "react";

const Socials = () => {
  return (
    <section id="socials" className="flex flex-col items-center text-center justify-center">
      <div className="flex justify-between items-center w-full mt-24 mb-8 md:mt-30 md:mb-20">
        <img className="w-1/4 md:w-1/3" src="./images/sections/dogprints.png"></img>
        <h2 className="text-4xl md:text-7xl font-display text-section-brown">socials</h2>
        <img className="w-1/4 md:w-1/3" src="./images/sections/dogprints.png"></img>
      </div>
      <div className="font-body md:text-2xl lg:text-3xl w-5/6 xl:w-3/4">
        <p className="text-nav-brown mb-10">
          Follow us on social media for updates and info!
        </p>
        <a href="https://www.instagram.com/lazyhacks.ca/" target="_blank" className="flex md:inline-flex items-center justify-center duration-300 hover:scale-105 ease-out text-body-link mb-3 md:my-0 md:mx-4">
        {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
        Copyright Konstantin Filakov. Licensed under CC BY.
        See license text at https://creativecommons.org/licenses/by/4.0/ */}
          <svg className="w-8 md:w-12 inline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor"/>
          </svg>
          <span className="ms-2">@lazyhacks.ca</span>
        </a>
        <a href="https://www.linkedin.com/company/lazyhacks/" target="_blank" className="inline-flex items-center justify-center duration-300 hover:scale-105 ease-out text-body-link mb-3 md:my-0 mx-4" >
          {/* Copyright Denali Design. Licensed under MIT License.
          See license text at https://opensource.org/license/MIT
          Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
          <svg className="w-8 md:w-12 inline" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <title>linkedin</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none"/>
                <rect width="48" height="48" fill="none"/>
              </g>
              <g id="icons_Q2" data-name="icons Q2">
                <path d="M41,4.1H7A2.9,2.9,0,0,0,4,7V41.1A2.9,2.9,0,0,0,7,44H41a2.9,2.9,0,0,0,2.9-2.9V7A2.9,2.9,0,0,0,41,4.1Zm-25.1,34h-6v-19h6Zm-3-21.6A3.5,3.5,0,0,1,9.5,13a3.4,3.4,0,0,1,6.8,0A3.5,3.5,0,0,1,12.9,16.5ZM38,38.1H32.1V28.8c0-2.2,0-5-3.1-5s-3.5,2.4-3.5,4.9v9.4H19.6v-19h5.6v2.6h.1a6.2,6.2,0,0,1,5.6-3.1c6,0,7.1,3.9,7.1,9.1Z"/>
              </g>
            </g>
          </svg>
          <span className="ms-2">LazyHacks</span>
        </a>
      </div>
    </section>
  );
};

export default Socials