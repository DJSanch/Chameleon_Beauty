"use client";

import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Image from "next/image";

const blogItems = [
  {
    id: 1,
    src: "/images/about/hello.jpeg",
    alt: "Editorial Makeup Look",
    text: "Discover a sophisticated makeup look designed to enhance your natural beauty.",
    sectionTitle: "Editorial Makeup",
    bgColor: "bg-pink-100",
    details: ["Editorial Photoshoot Package", "Fashion Show Prep"],
  },
  {
    id: 2,
    src: "/images/about/hello.jpeg",
    alt: "Bridal Makeup Look",
    text: "Explore timeless elegance with our bespoke makeup services that bring out your best features.",
    sectionTitle: "Bridal Services",
    bgColor: "bg-red-100",
    details: ["Bridal Trial", "Wedding Day Glam", "Bridal Party Package"],
  },
  {
    id: 3,
    src: "/images/about/hello.jpeg",
    alt: "Special Event Makeup Look",
    text: "Experience luxury with our expertly crafted makeup looks tailored to your personal style.",
    sectionTitle: "Special Event Makeup",
    bgColor: "bg-purple-100",
    details: ["Red Carpet Ready", "Special Occasion Glow", "Social Media Campaigns"],
  },
  {
    id: 4,
    src: "/images/about/hello.jpeg",
    alt: "Add-ons",
    text: "Indulge in glamour with our curated makeup services for an unforgettable look.",
    sectionTitle: "Add-ons",
    bgColor: "bg-yellow-100",
    details: ["Makeup Lesson", "Travel Fee"],
  },
];

const Blog = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleToggleDetails = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Explore our gallery of elegant and refined makeup looks designed to enhance your natural beauty and personal style."
      />
      <div className="max-w-7xl mx-auto my-12 p-6 space-y-12">
        {blogItems.map((item) => (
          <div
            key={item.id}
            className={`relative ${item.bgColor} shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out ${
              visible ? "fade-up" : ""
            }`}
          >
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start h-full">
              <div className="relative flex-shrink-0 lg:w-1/3">
                <div className="relative group">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h2 className="text-white text-lg font-serif">{item.sectionTitle}</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:w-2/3 p-6 lg:ml-4 flex-grow">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-gray-800 text-lg font-serif leading-tight mb-4">
                      {item.text}
                    </p>
                    <ul className="text-gray-700 text-sm font-serif leading-tight mb-4 list-disc pl-5">
                      {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="/contact" // Redirect to the contact page
                    className="mt-4 w-32 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-md hover:from-pink-600 hover:to-red-600 transition-colors duration-300 ease-in-out"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* Details container */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                selectedId === item.id ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="relative bg-gradient-to-r from-teal-300 to-teal-500 text-white p-6 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-serif leading-tight mb-4">
                  {item.sectionTitle}
                </h2>
                <ul className="text-sm font-serif leading-tight list-disc pl-5">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Arrow button to toggle details */}
            <div
              onClick={() => handleToggleDetails(item.id)}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10"
            >
              <svg
                className={`w-6 h-6 ${selectedId === item.id ? "rotate-180" : ""} transition-transform duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <AboutSectionOne />
    </>
  );
};

export default Blog;
