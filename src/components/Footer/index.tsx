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
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
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
                  href="/"
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
                  href="/"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    className="fill-current"
                  >
                    <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6f4f28] duration-300 hover:text-primary dark:text-[#f6b1b1] dark:hover:text-primary"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    className="fill-current"
                  >
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.2196C15.8443 15.4222 16.3441 14.8999 16.3441 14.3029V1.11936C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
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
                    hello@yourdomain.com
                  </a>
                </li>
                <li>
                  <p className="text-base text-[#6f4f28] dark:text-[#6f4f28] font-lora">
                    123 Street Name, City, State, 12345
                  </p>
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
