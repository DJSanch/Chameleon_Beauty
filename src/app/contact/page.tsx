import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chameleon Beauty",
  description: "This is Contact Page for Inquiries",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="If you are intereseted in our services just send a message and I will notify you breifly."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
