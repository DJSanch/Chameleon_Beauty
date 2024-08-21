"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// Updated checkIcon with brown color
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path
      d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"
      fill="#8b4513"
    />
  </svg>
);

const images = [
  { src: "/images/about/about-image.svg", category: "Editorial Makeup" },
  { src: "/images/about/about-image-dark.svg", category: "Editorial Makeup" },
  { src: "/images/about/hello.jpeg", category: "Bridal Services" },
  { src: "/images/about/hello.jpeg", category: "Special Event Makeup" },
  { src: "/images/about/hello.jpeg", category: "Add ons" },
  { src: "/images/about/hello.jpeg", category: "Editorial Makeup" },
  { src: "/images/about/hello.jpeg", category: "Add ons" },
];

const AboutSectionOne: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(true);

  const handleImageClick = (index: number) => {
    if (isZoomed && currentImage === index) {
      // Clicked image is already zoomed, so unzoom it
      setIsZoomed(false);
    } else {
      // Zoom in on the clicked image
      setCurrentImage(index);
      setIsZoomed(true);
    }
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-serif font-light text-body-color font-lora">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap items-start">
            {/* Text Section */}
            <div className="w-full px-4 lg:w-1/2 lg:pr-8">
              <SectionTitle
                title="At Chameleon Beauty,"
                paragraph="We believe that true beauty comes from within - and we're here to help you showcase it. As a professional editorial and wedding makeup artist, I specialize in creating stunning looks that not only enhance your natural features but also boost your confidence. Our mission is simple: to empower women through the art of makeup. Whether you're walking down the aisle, stepping into the spotlight for a photoshoot, or just want to feel fabulous for a special event, we're here to bring out your inner strength and beauty. Discover the transformative power of professional makeup artistry and let your true self shine."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Glowing" />
                    <List text="Radiant" />
                    <List text="Flawless" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Elegant" />
                    <List text="Bold" />
                    <List text="Youthful" />
                  </div>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="w-full px-4 lg:w-1/2 lg:pl-8">
              {/* Toggle Button */}
              <button
                onClick={() => setButtonsVisible(!buttonsVisible)}
                className="mb-6 py-1 px-3 text-xs sm:text-sm md:text-base rounded font-lora text-[#8b4513] bg-none transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
              >
                {buttonsVisible ? "▲" : "▼"}
              </button>

              {/* Category Filter Buttons */}
              {buttonsVisible && (
                <div className="flex flex-wrap space-x-2 mb-6 font-lora">
                  {["All", "Editorial Makeup", "Bridal Services", "Special Event Makeup", "Add ons"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`py-1 px-3 text-xs sm:text-sm md:text-base rounded font-playfair text-[#8b4513] bg-none transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
                {images
                  .filter((image) => selectedCategory === "All" || image.category === selectedCategory)
                  .map((image, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer overflow-hidden"
                      style={{ paddingBottom: "100%" }} // Maintain square aspect ratio
                      onClick={() => handleImageClick(index)}
                    >
                      <Image
                        src={image.src}
                        alt={`about-image-${index}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-300 ease-in-out transform hover:scale-110" // Slightly larger hover scale
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Fullscreen Overlay */}
          {isZoomed && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                &times;
              </button>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 text-white text-3xl"
              >
                &#8249;
              </button>
              <Image
                src={images[currentImage].src}
                alt={`zoomed-about-image-${currentImage}`}
                width={800}
                height={800}
                style={{ objectFit: "contain" }}
                className="max-h-[80vh] max-w-[80vw]"
                onClick={() => setIsZoomed(false)} // Unzoom on image click
              />
              <button
                onClick={handleNextImage}
                className="absolute right-4 text-white text-3xl"
              >
                &#8250;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
