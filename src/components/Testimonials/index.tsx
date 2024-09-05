"use client";
import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";

const Testimonials = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscription = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Replace with your subscription API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed.');
      }

      setSuccessMessage('Subscription successful! Thank you for subscribing.');
      setEmail('');
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-purple-50 to-purple-100 relative z-10 py-16 md:py-22 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Brush Strokes & Beauty Notes"
          paragraph="Your Beauty Insider - September 2024: Fall Beauty Awakening. As the leaves begin their vibrant transformation, it's time for our beauty routines to follow suit. This month, we're embracing the warm hues and rich textures that autumn brings."
          center
        />
        
        {/* Content Sections */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-800">Trend Alert: Copper Crush</h2>
          <p className="mt-2 text-gray-600">Copper eyeshadows are making a stunning comeback. Learn how to blend this metallic shade for a day-to-night look that captures the essence of fall foliage.</p>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-800">Skincare Spotlight: Hydration Heroes</h2>
          <p className="mt-2 text-gray-600">Combat the onset of cooler weather with our curated selection of deeply nourishing moisturizers. I’ll guide you through choosing the perfect formula for your skin type.</p>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-800">Wellness Corner: Mindful Makeup Routines</h2>
          <p className="mt-2 text-gray-600">Discover how to turn your daily makeup application into a moment of self-care and meditation. My step-by-step guide will help you start each day with intention and patience.</p>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-800">Artistry Masterclass: The Perfect Autumn Lip</h2>
          <p className="mt-2 text-gray-600">Join me for an exclusive online session where we'll demonstrate how to achieve the perfect ombré lip using this season's most coveted shades. Stay tuned!</p>
        </div>

        {/* Newsletter Subscription Form */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-800">Subscribe to Our Newsletter</h2>
          <p className="mt-2 text-gray-600">Stay updated with the latest beauty trends, tips, and exclusive offers. Enter your email below to subscribe.</p>
          <form onSubmit={handleSubscription} className="mt-4 flex flex-col md:flex-row md:items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 md:mt-0 md:ml-4 px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
          {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
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
