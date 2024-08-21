"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{
          position: 'relative',
          backgroundImage: "url('/images/hero/hello.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Overlay for background blending */}
        <div
          className="absolute inset-0 bg-gray-800 opacity-50"
          style={{
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }}
        ></div>

        {/* Decorative Bubbles */}
        <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none">
          {/* Single Bubble Styling */}
          <style jsx>{`
            .bubble {
              background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
              border-radius: 50%;
              box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
              opacity: 0.6;
            }
          `}</style>
          <div className="absolute top-10 left-10 w-32 h-32 bubble animate-bubble1" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bubble animate-bubble2" />
          <div className="absolute top-1/2 right-1/2 w-24 h-24 bubble transform translate-x-1/2 -translate-y-1/2 animate-bubble3" />
          
          {/* Additional scattered bubbles */}
          <div className="absolute top-5 right-5 w-12 h-12 bubble animate-bubble2" />
          <div className="absolute bottom-10 left-10 w-20 h-20 bubble animate-bubble1" />
          <div className="absolute bottom-32 left-1/3 w-16 h-16 bubble animate-bubble3" />
          <div className="absolute top-1/4 right-1/4 w-14 h-14 bubble animate-bubble1" />
          <div className="absolute top-1/3 left-1/3 w-10 h-10 bubble animate-bubble2" />
          <div className="absolute bottom-1/4 right-1/3 w-22 h-22 bubble animate-bubble3" />
        </div>

        <div className="flex items-center justify-center h-full relative z-10">
          <div className="text-center">
            {/* Text Section */}
            <div className="flex flex-col items-center">
              <h1
                className="mb-5 font-bold leading-tight transition-transform duration-300 ease-in-out hover:-translate-y-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: '#f5f5dc',
                }}
              >
                CHAMELEON BEAUTY
              </h1>
              <p
                className="mb-12 !leading-relaxed transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:text-[#6f4f28] text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                style={{ 
                  fontFamily: 'Lora, serif',
                  color: '#8b4513',
                }}
              >
                Unleash Your Inner Glamour
              </p>
              <div>
                <Link href="#about" className="inline-block px-6 py-3 border border-[#f5f5dc] text-[#f5f5dc] font-lora text-lg rounded-full transition-colors duration-300 ease-in-out hover:bg-[#f5f5dc] hover:text-[#6f4f28]">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
