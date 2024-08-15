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

        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#f5f5dc] rounded-full opacity-50 shadow-lg animate-bubble1" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#f5f5dc] rounded-full opacity-50 shadow-lg animate-bubble2" />
          <div className="absolute top-1/2 right-1/2 w-24 h-24 bg-[#f5f5dc] rounded-full opacity-50 shadow-lg transform translate-x-1/2 -translate-y-1/2 animate-bubble3" />
    
          {/* Additional clustered circles */}
          <div className="absolute right-60 top-10 transform -translate-y-1/2 pointer-events-none">
            <div className="relative">
              {/* Bubbles */}
              <div className="w-16 h-16 bg-[#f5f5dc] rounded-full opacity-50 absolute top-0 left-0 transform translate-x-12 translate-y-12 animate-bubble1" />
              <div className="w-20 h-20 bg-[#f5f5dc] rounded-full opacity-50 absolute top-12 left-12 transform translate-x-16 translate-y-8 animate-bubble2" />
              <div className="w-24 h-24 bg-[#f5f5dc] rounded-full opacity-50 absolute top-24 left-24 transform -translate-x-8 translate-y-12 animate-bubble3" />
              <div className="w-28 h-28 bg-[#f5f5dc] rounded-full opacity-50 absolute top-36 left-36 transform -translate-x-12 -translate-y-12 animate-bubble1" />
            </div>
          </div>
        </div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto flex flex-col items-center lg:flex-row lg:items-start lg:justify-center">
                {/* New Left Side Image */}
                <div className="flex-none lg:w-1/3 lg:pr-8">
                  <img
                    src="/images/hero/hello.jpeg" // Replace with your image path
                    alt="Left Side Image"
                    className="h-[17rem] w-[auto] rounded-lg shadow-lg" // Add shadow class here
                    style={{ width: '900px', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)', }} // Adjust width as needed
                  />
                </div>

                {/* Line and Text */}
                <div className="flex flex-col items-center lg:items-start lg:w-2/3">
                  <div className="flex items-center">
                    <div
                      className="flex items-center"
                      style={{ marginRight: '40px' }} // Pushes the line to the right
                    >
                      <div
                        className="h-full border-l-4"
                        style={{
                          height: '17rem',
                          borderColor: '#f5f5dc',
                        }}
                      ></div>
                    </div>
                    <div className="text-left">
                      <h1
                        className="mb-5 font-bold leading-tight transition-transform duration-300 ease-in-out hover:translate-x-2"
                        style={{ 
                          fontFamily: 'Playfair Display, serif',
                          color: '#f5f5dc',
                          fontSize: '4rem',
                        }}
                      >
                        CHAMELEON BEAUTY
                      </h1>
                      <p
                        className="mb-12 !leading-relaxed transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-[#6f4f28]"
                        style={{ 
                          fontFamily: 'Lora, serif',
                          color: '#8b4513',
                          fontSize: '2rem',
                        }}
                      >
                        Unleash Your Inner Glamour
                      </p>
                      <Link href="#about" className="inline-block px-6 py-3 border border-[#f5f5dc] text-[#f5f5dc] font-lora text-lg rounded-full transition-colors duration-300 ease-in-out hover:bg-[#f5f5dc] hover:text-[#6f4f28]">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
