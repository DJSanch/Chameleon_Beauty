"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen((prevState) => !prevState);
  };

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);          

  const handleSubmenu = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleMenuItemClick = () => {
    setNavbarOpen(false);
  };

  const usePathName = usePathname();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-purple-100 !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center lg:justify-start lg:ml-2rem">
          {/* Logo Section */}
          <div className="w-32 max-w-full px-1 xl:mr-6">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-1 lg:py-0.5" : "py-2"
              }`}
            >
              <Image
                src="/images/logo/1.svg"
                alt="logo"
                width={120}
                height={25}
                className="w-full"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex lg:space-x-4 lg:items-center lg:ml-2rem">
            <nav id="navbarCollapse" className="navbar lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100">
              <ul className="block lg:flex lg:space-x-4">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={handleMenuItemClick}
                        className={`flex py-1 text-sm lg:mr-12 lg:inline-flex lg:px-20 lg:py-2 font-lora button-text-base ${
                          usePathName === menuItem.path ? "text-purple" : "text-purple"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="flex cursor-pointer items-center justify-between py-1 text-sm text-white group-hover:text-purple-300 lg:mr-0 lg:inline-flex lg:px-0 lg:py-2 font-chameleon button-text-base"
                        >
                          {menuItem.title}
                          <span className="pl-2">
                            <svg width="20" height="19" viewBox="0 0 20 19">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10 13.4142L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </p>
                        <div
                          className={`submenu absolute left-0 top-full rounded-sm bg-purple-50 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[200px] lg:p-3 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, index) => (
                            <Link
                              href={submenuItem.path}
                              onClick={handleMenuItemClick}
                              key={index}
                              className="block rounded py-2 text-xs text-white hover:text-gray-300 lg:px-2 font-chameleon button-text-base"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Burger Menu and Mobile Navigation Menu */}
          <div className="relative lg:hidden flex items-center ml-auto">
            {/* Burger Menu Button */}
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="px-8 py-1"
            >
              <span
                className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                  navbarOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : "my-1"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                  navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

            {/* Mobile Navigation Menu */}
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-5 top-full z-30 w-[200px] rounded border-[.5px] border-white bg-gray-800 px-3 py-2 duration-300 ${
                navbarOpen
                  ? "opacity-100 visible"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={handleMenuItemClick}
                        className={`flex py-1 text-sm font-lora button-text-base ${
                          usePathName === menuItem.path ? "text-white" : "text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="flex cursor-pointer items-center justify-between py-1 text-sm text-white group-hover:text-gray-300 font-chameleon button-text-base"
                        >
                          {menuItem.title}
                          <span className="pl-2">
                            <svg width="20" height="19" viewBox="0 0 20 19">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10 13.4142L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </p>
                        <div
                          className={`submenu absolute left-0 top-full rounded-sm bg-gray-700 transition-[top] duration-300 group-hover:opacity-100 ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, index) => (
                            <Link
                              href={submenuItem.path}
                              onClick={handleMenuItemClick}
                              key={index}
                              className="block rounded py-2 text-xs text-white hover:text-gray-300 font-chameleon button-text-base"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
