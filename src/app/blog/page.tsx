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
    textColor: "text-pink-800",
    details: ["Editorial Photoshoot Package", "Fashion Show Prep"],
    dropdownDetails: [
      {
        title: "Editorial Photoshoot Package",
        items: [
          "Full face glamour makeup",
          "Touch-ups throughout the shoot",
          "Complimentary false lashes",
          "Duration: Up to 4 hours"
        ],
        gradientColor: "bg-gradient-to-r from-pink-300 to-pink-400"
      },
      {
        title: "Fashion Show Prep",
        items: [
          "Makeup for runway or backstage photos",
          "Quick-change looks available",
          "Duration: Varies based on number of models"
        ],
        gradientColor: "bg-gradient-to-r from-pink-300 to-pink-400"
      }
    ]
  },
  {
    id: 2,
    src: "/images/about/hello.jpeg",
    alt: "Bridal Makeup Look",
    text: "Explore elegance with our bespoke makeup services that bring out your best features.",
    sectionTitle: "Bridal Services",
    bgColor: "bg-red-100",
    textColor: "text-red-800",
    details: [
      "Bridal Trial",
      "Wedding Day Glam",
      "Bridal Party Package"
    ],
    dropdownDetails: [
      {
        title: "Bridal Trial",
        items: [
          "Consultation and full makeup application",
          "Discuss and test different looks",
          "Duration: 2 hours",
          "Price: [Your price]"
        ],
        gradientColor: "bg-gradient-to-r from-red-300 to-red-400"
      },
      {
        title: "Wedding Day Glam",
        items: [
          "Premium bridal makeup application",
          "Use of high-end, long-lasting products",
          "Touch-up kit for the bride",
          "Duration: 1.5 hours",
          "Price: [Your price]"
        ],
        gradientColor: "bg-gradient-to-r from-red-300 to-red-400"
      },
      {
        title: "Bridal Party Package",
        items: [
          "Makeup for bride + 4 bridesmaids",
          "Complimentary lipstick for touch-ups",
          "Duration: 5 hours",
          "Price: [Your price]",
          "Additional bridesmaids: [Your price] each"
        ],
        gradientColor: "bg-gradient-to-r from-red-300 to-red-400"
      }
    ]
  },
  {
    id: 3,
    src: "/images/about/hello.jpeg",
    alt: "Special Event Makeup Look",
    text: "Experience luxury with our expertly crafted makeup looks tailored to your personal style.",
    sectionTitle: "Special Event Makeup",
    bgColor: "bg-purple-100",
    textColor: "text-pink-800",
    details: [
      "Red Carpet Ready",
      "Special Occasion Glow",
      "Social Media Campaigns"
    ],
    dropdownDetails: [
      {
        title: "Red Carpet Ready",
        items: [
          "Full glam makeup for galas, premieres, or other high-profile events",
          "Includes false lashes and touch-up kit",
          "Duration: 1.5 hours",
          "Price: [Your price]"
        ],
        gradientColor: "bg-gradient-to-r from-purple-300 to-purple-400"
      },
      {
        title: "Special Occasion Glow",
        items: [
          "Makeup for birthdays, anniversaries, or nights out",
          "Natural or glamorous options available",
          "Duration: 1 hour",
          "Price: [Your price]"
        ],
        gradientColor: "bg-gradient-to-r from-purple-300 to-purple-400"
      },
      {
        title: "Social Media Campaigns",
        items: [
          "Natural or glamorous options available",
          "Duration: 1 hour",
          "Price: [Your price]"
        ],
        gradientColor: "bg-gradient-to-r from-purple-300 to-purple-400"
      }
    ]
  },
  {
    id: 4,
    src: "/images/about/hello.jpeg",
    alt: "Add-ons",
    text: "Indulge in glamour with our curated makeup services for an unforgettable look.",
    sectionTitle: "Add-ons",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    details: ["Makeup Lesson", "Travel Fee"],
    dropdownDetails: [
      {
        title: "Makeup Lesson",
        items: [
          "Learn tips and tricks from a professional",
          "Duration: [Your time] hours",
          "Price: [Your price] per hour"
        ],
        gradientColor: "bg-gradient-to-r from-yellow-300 to-yellow-400"
      },
      {
        title: "Travel Fee",
        items: [
          "Fee applies beyond [X] miles",
          "Price: [Your price] per mile"
        ],
        gradientColor: "bg-gradient-to-r from-yellow-300 to-yellow-400"
      }
    ]
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

  const isOpen = (id: number) => selectedId === id;

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
                    <p className={`text-gray-800 text-lg font-serif leading-tight mb-4 ${item.textColor}`}>
                      {item.text}
                    </p>
                    <ul className={`text-gray-700 text-sm font-serif leading-tight mb-4 pl-5 ${item.textColor}`}>
                      {item.details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-4 h-4 text-gray-700 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="/contact" // Redirect to the contact page
                    className="mt-4 w-32 px-4 py-2 bg-gradient-to-r from-red-300 to-beige-500 font-lora text-black rounded-lg shadow-md hover:from-pink-400 hover:to-beige-600 transition-colors duration-300 ease-in-out transform hover:scale-105 duration-300 ease-in-out"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* Details container */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen(item.id) ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden shadow-lg ${item.bgColor} p-6`}
            >
              {item.dropdownDetails.map((dropdownItem, index) => (
                <div key={index} className="mb-8 px-10">
                  <h3 className={`text-xl font-bold ${item.textColor}`}>{dropdownItem.title}</h3>
                  <ul className={`list-disc pl-5 mt-2 ${item.textColor}`}>
                    {dropdownItem.items.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-700 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                </div>
              ))}
            </div>
            <button
              onClick={() => handleToggleDetails(item.id)}
              className="absolute top-0 right-0 mt-4 mr-4 p-2 text-gray-700 bg-gradient-to-r from-red-300 to-beige-300 rounded-full hover:from-pink-400 hover:to-beige-400  transition-colors duration-300 ease-in-out"
            >
              {isOpen(item.id) ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
      <AboutSectionOne />
    </>
  );
};

export default Blog;
