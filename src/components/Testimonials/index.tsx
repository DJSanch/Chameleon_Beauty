import SectionTitle from "../Common/SectionTitle";

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-pink-100 relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Daily Updates"
          paragraph="Discover the experiences of our delighted customers. We focus on creating an environment that promotes beauty and elegance."
          center
        />
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        {/* SVG Code */}
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        {/* SVG Code */}
      </div>
    </section>
  );
};

export default Testimonials;
