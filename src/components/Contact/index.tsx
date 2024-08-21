"use client";

import React, { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

export default function Contact() {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending....");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("access_key", "dad42840-ed00-4c20-a0e8-7285c98d49e9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 min-h-screen flex items-center justify-center bg-beige">
      <div className="container flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl px-6 md:px-12 lg:px-16">
          <div
            className="mb-12 rounded-lg bg-white p-8 shadow-lg border border-pink-200 sm:p-12 lg:mb-5 lg:px-12 xl:p-12"
            data-wow-delay=".15s"
          >
            <h2 className="mb-6 text-2xl font-bold text-pink-800 sm:text-3xl lg:text-2xl xl:text-3xl">
              For Inquiries Send Us a Message
            </h2>
            <p className="mb-12 text-base font-medium text-pink-600">
              Our support team will get back to you ASAP via email.
            </p>
            <form onSubmit={onSubmit}>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <div className="w-full md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-pink-700"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-pink-300 bg-beige px-4 py-3 text-lg text-pink-700 outline-none focus:border-pink-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-pink-700"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-pink-300 bg-beige px-4 py-3 text-lg text-pink-700 outline-none focus:border-pink-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-pink-700"
                    >
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full rounded-md border border-pink-300 bg-beige px-4 py-3 text-lg text-pink-700 outline-none focus:border-pink-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-pink-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your Message"
                      className="w-full rounded-md border border-pink-300 bg-beige px-4 py-3 text-lg text-pink-700 outline-none resize-none focus:border-pink-500"
                      required
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-pink-500 px-4 py-3 text-lg font-medium text-white shadow-md duration-300 hover:bg-pink-400 disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
            {result && (
              <p className="mt-4 text-base font-medium text-pink-800">
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
