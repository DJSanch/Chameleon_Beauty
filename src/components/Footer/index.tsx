"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#fdfaf3] via-[#f6b1b1] to-[#fdfaf3] dark:from-[#1a1a1a] dark:via-[#2c2c2c] dark:to-[#1a1a1a] pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="absolute inset-0 z-[-1]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-[#6f4f28] dark:text-[#6f4f28]"
        >
          <defs>
            <linearGradient
              id="footerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6f4f28" />
              <stop offset="100%" stopColor="#6f4f28" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#footerGradient)"
            d="M0,128L30,117.3C60,107,120,85,180,90.7C240,96,300,128,360,149.3C420,171,480,181,540,170.7C600,160,660,128,720,128C780,128,840,160,900,181.3C960,203,1020,213,1080,192C1140,171,1200,117,1260,106.7C1320,96,1380,128,1440,149.3L1500,171L1500,320L1440,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </div>
      <div className="container relative">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-2 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[120px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/1.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={70}
                  height={15}
                />
                <Image
                  src="/images/logo/1.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={70}
                  height={15}
                />
              </Link>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100090319733907"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/themakeupchameleon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://pin.it/2v4FFYWON"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0a12 12 0 0 0-4.82 23c-.03-.85 0-1.85.21-2.76l1.55-6.54s-.39-.77-.39-1.9c0-1.78 1.03-3.1 2.32-3.1 1.09 0 1.62.81 1.62 1.8 0 1.09-.7 2.73-1.06 4.25-.3 1.27.63 2.31 1.89 2.31 2.27 0 3.8-2.92 3.8-6.38 0-2.63-1.77-4.6-4.99-4.6a5.68 5.68 0 0 0-5.9 5.75c0 1.05.3 1.78.78 2.35.23.27.26.37.18.67l-.25.97c-.08.3-.32.4-.6.3-1.67-.69-2.46-2.52-2.46-4.59 0-3.4 2.88-7.5 8.58-7.5 4.58 0 7.6 3.32 7.6 6.88 0 4.7-2.62 8.22-6.48 8.22-1.3 0-2.51-.7-2.93-1.5l-.84 3.3c-.26.93-.76 1.86-1.21 2.58A11.99 11.99 0 0 0 24 12 12 12 0 0 0 12 0z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-light text-[#6f4f28] dark:text-[#f6b1b1] font-lora">
                Useful Links
              </h2>
              <ul>
                <li>
                  <Link
                    href="/blog"
                    className="mb-4 inline-block text-base text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary font-lora"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary font-lora"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary font-lora"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-light text-[#6f4f28] dark:text-[#f6b1b1] font-lora">
                Quick Links
              </h2>
              <ul>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="mb-4 inline-block text-base text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary font-lora"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="mb-4 inline-block text-base text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary font-lora"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-light text-[#6f4f28] dark:text-[#f6b1b1] font-lora">
                Contact
              </h2>
              <ul>
                <li className="mb-4">
                  <a
                    href="mailto:hello@yourdomain.com"
                    className="inline-block text-base text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary font-lora"
                  >
                    eyeseniamua@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
