import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chameleon Beauty",
  description: "About our Services",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About me"
        description="My Name is Kyle William T. Tan, Owner of Canadian Auto Parts. Once upon a time, I dream to become stephen curry and become one of the best league players in the world to defeat faker. I go to gym everyday and play basketball every saturday. Currently I am a 3rd year irregular student BS Mechanical Engineering.  "
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
