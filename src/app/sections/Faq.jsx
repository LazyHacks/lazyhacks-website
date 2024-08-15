"use client";

import { useState } from "react";
import { faqs } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="flex flex-col items-center text-center justify-center "
    >
      <h1 className="text-[100px] font-display text-nav-brown">faq</h1>
      <div className="flex flex-col md:flex-row">
        {/* First Column */}
        <div className="flex-1">
          {faqs.slice(0, 5).map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 mb-4 transition-all duration-300 ${
                open === index ? "expanded" : ""
              }`}
            >
              <div
                className="flex items-center mb-4 cursor-pointer justify-center"
                onClick={() => toggle(index)}
              >
                <FontAwesomeIcon
                  icon={open === index ? faMinus : faPlus}
                  className="text-gray-600 mr-5"
                />
                <h3 className="text-4xl font-display sm:text-3xl">
                  {faq.question}
                </h3>
              </div>
              <div
                className={`mx-10 sm:mx-4 overflow-hidden transition-all duration-500 ease-in-out transform ${
                  open === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 font-body sm:mx-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Second Column */}
        <div className="flex-1">
          {faqs.slice(5, 10).map((faq, index) => (
            <div
              key={index + 5}
              className={`bg-white rounded-lg p-6 mb-4 transition-all duration-300 ${
                open === index + 5 ? "expanded" : ""
              }`}
            >
              <div
                className="flex items-center mb-4 cursor-pointer justify-center"
                onClick={() => toggle(index + 5)}
              >
                <FontAwesomeIcon
                  icon={open === index + 5 ? faMinus : faPlus}
                  className="text-gray-600 mr-4"
                />
                <h3 className="text-4xl font-display sm:text-3xl ">
                  {faq.question}
                </h3>
              </div>
              <div
                className={`mx-10 sm:mx-4 overflow-hidden transition-all duration-500 ease-in-out transform ${
                  open === index + 5
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 font-body mx-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
