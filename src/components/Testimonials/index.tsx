import SectionTitle from "../Common/SectionTitle";

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-purple-100 relative z-10 py-16 md:py-22 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Brush Strokes & Beauty Notes"
          paragraph="Your Beauty Insider - September 2024: Fall Beauty Awakening. As the leaves begin their vibrant transformation, it's time for our beauty routines to follow suit. This month, we're embracing the warm hues and rich textures that autumn brings."
          center
        />
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-purple-800">Trend Alert: Copper Crush</h2>
          <p className="mt-2 text-purple-700">Copper eyeshadows are making a stunning comeback. Learn how to blend this metallic shade for a day-to-night look that captures the essence of fall foliage.</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-purple-800">Skincare Spotlight: Hydration Heroes</h2>
          <p className="mt-2 text-purple-700">Combat the onset of cooler weather with our curated selection of deeply nourishing moisturizers. I’ll guide you through choosing the perfect formula for your skin type.</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-purple-800">Wellness Corner: Mindful Makeup Routines</h2>
          <p className="mt-2 text-purple-700">Discover how to turn your daily makeup application into a moment of self-care and meditation. My step-by-step guide will help you start each day with intention and patience.</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-purple-800">Artistry Masterclass: The Perfect Autumn Lip</h2>
          <p className="mt-2 text-purple-700">Join me for an exclusive online session where we&apos;ll demonstrate how to achieve the perfect ombré lip using this season&apos;s most coveted shades. Stay tuned!</p>
        </div>
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
