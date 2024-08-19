import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-8 lg:pb-12">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-2">
          <div className="w-full px-4 lg:w-1/2 flex items-center justify-center lg:justify-start">
            <div
              className="relative mx-auto mb-4 lg:mb-0 h-[400px] lg:h-[500px] max-w-full lg:max-w-[500px] text-center lg:text-left -mt-12 lg:-mt-14 image-animation"
              data-wow-delay=".15s"
              style={{ position: 'relative', width: '100%' }}
            >
              <Image
                src="/images/about/aboutme.jpeg"
                alt="about image"
                fill
                style={{ objectFit: 'contain' }}
                className="drop-shadow-three"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 flex items-center">
            <div className="max-w-[600px] lg:pl-4 text-animation">
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-bold text-[#6f4f28] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl font-lora">
                  My Journey,
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed font-lora">
                  My journey into the world of makeup artistry began with black eyeliner over a decade ago. What started as a passion for colors and creativity soon blossomed into a mission to help women discover their own unique beauty.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed font-lora">
                  As a professional makeup artist specializing in editorial and bridal makeup, I've had the privilege of working with diverse clientele, from blushing brides to beautiful models posing for photoshoot campaigns. Each face I work on is a new canvas, a fresh opportunity to bring out someone's inner radiance.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed font-lora">
                  My approach to makeup is more than just applying products - it's about creating an experience that empowers. I believe that "when a woman feels beautiful, she exudes confidence that shines from within." My greatest achievement is the smile on a client's face when she looks in the mirror and sees her most glamorous self looking back. I'm excited to work with you and help you discover the glamor within you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
