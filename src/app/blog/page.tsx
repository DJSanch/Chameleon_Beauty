import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Brands from "@/components/Brands";
import Image from "next/image"; // Make sure to import Next.js Image component for optimized images

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chameleon Beauty",
  description: "Gallery",
  // other metadata
};

// Sample data for illustration, replace with actual blog data
const blogItems = [
  { id: 1, src: "/images/about/hello.jpeg", alt: "Elegant Makeup Look 1", text: "Discover a sophisticated makeup look designed to enhance your natural beauty.", sectionTitle: "Editorial Makeup", bgColor: "bg-pink-100" },
  { id: 2, src: "/images/about/hello.jpeg", alt: "Elegant Makeup Look 2", text: "Explore timeless elegance with our bespoke makeup services that bring out your best features.", sectionTitle: "Bridal Services", bgColor: "bg-red-100" },
  { id: 3, src: "/images/about/hello.jpeg", alt: "Elegant Makeup Look 3", text: "Experience luxury with our expertly crafted makeup looks tailored to your personal style.", sectionTitle: "Special Event Makeup", bgColor: "bg-purple-100" },
  { id: 4, src: "/images/about/hello.jpeg", alt: "Elegant Makeup Look 4", text: "Indulge in glamour with our curated makeup services for an unforgettable look.", sectionTitle: "Add ons", bgColor: "bg-yellow-100" },
  { id: 5, src: "/images/about/hello.jpeg", alt: "Elegant Makeup Look 5", text: "Transform your appearance with our elegant and refined makeup artistry.", sectionTitle: "Digital Services", bgColor: "bg-blue-100" },
];

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Makeup Services"
        description="Explore our gallery of elegant and refined makeup looks designed to enhance your natural beauty and personal style."
      />
      <div className="max-w-7xl mx-auto my-12 p-6 space-y-12 animate-move-up">
        {blogItems.map((item) => (
          <div
            key={item.id}
            className={`relative ${item.bgColor} shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 ease-in-out`}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="relative flex-shrink-0 lg:w-1/3">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500} // Adjust width
                  height={350} // Adjust height
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="text-white text-2xl font-serif leading-tight text-center px-4 py-2">
                    {item.sectionTitle}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col lg:w-2/3 p-6  lg:ml-4"> {/* Updated background color */}
                <p className="text-gray-800 text-lg font-serif leading-tight mb-4">
                  {item.text}
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-md hover:from-pink-600 hover:to-red-600 transition-colors duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AboutSectionOne />
    </>
  );
};

export default Blog;
