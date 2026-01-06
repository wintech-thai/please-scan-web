"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AppRoute } from "@/config/app.route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { env } from "next-runtime-env";

// --- Custom Icons (SVG) ---

const PhoneSolidIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.9 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
  </svg>
);

const MobileSolidIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className={className}>
    <path d="M0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM192 400a48 48 0 1 0 0 96 48 48 0 1 0 0-96z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className={className}>
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}>
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
  </svg>
);

const LineIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}>
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const links = [
    { name: "About", link: AppRoute.home + '#about' },
    { name: "Services", link: AppRoute.home + '#services' },
    { name: "Privacy", link: AppRoute.privacy },
    { name: "Status", link: AppRoute.status },
    { name: "Documents", link: AppRoute.document },
  ];

  const socials = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://www.facebook.com/profile.php?id=61585925347418",
      bgClass: "bg-[#3B5998] hover:bg-[#2d4373]",
    },
    {
      name: "Line",
      icon: LineIcon,
      href: "https://line.me/R/ti/p/@232ljkiy",
      bgClass: "bg-[#06C755] hover:bg-[#05b64d]",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://www.instagram.com/please_scann/?igsh=d3EwemdoZjVtN2lm&utm_source=qr#",
      bgClass: "bg-[#262626] hover:bg-[#000000]",
    },
    {
      name: "TikTok",
      icon: TiktokIcon,
      href: "https://www.tiktok.com/@ssspm55?lang=th-TH",
      bgClass: "bg-[#64748b] hover:bg-[#475569]",
    },
  ];

  const handleMobileNavClick = (link: string) => {
    if (link.includes('#') && pathname === AppRoute.home) {
      setIsOpen(false);
      setTimeout(() => {
        const anchor = link.split('#')[1];
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      return;
    }
    setIsOpen(false);
  };

  const consoleUrl = (env("NEXT_PUBLIC_CONSOLE_URL") ?? "") + "/auth/sign-in";

  return (
    <motion.nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Link href={AppRoute.home} className="flex items-center">
              <Image
                src="/logo.png"
                alt="Please Scan Logo"
                width={60}
                height={60}
                className="mr-2"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-2 lg:space-x-4">
              {/* Menu Links */}
              {links.map((link) => (
                <Link key={link.name} href={link.link}>
                  <motion.span
                    whileHover={{ scale: 1.1, color: "#60A5FA" }}
                    className="text-white hover:text-blue-400 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}

              {/* --- Contact Info (Desktop - Inline Stacked) --- */}
              <div className="flex flex-col justify-center items-end border-l border-white/10 pl-4 ml-2 lg:ml-4 leading-tight">
                  <div className="flex items-center space-x-2">
                      <PhoneSolidIcon className="w-3 h-3 text-pink-500" />
                      <span className="text-xs text-pink-100 font-medium">095-347-6002</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-0.5">
                      <MobileSolidIcon className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-300 font-light whitespace-nowrap">094-249-4880 (International Contact)</span>
                  </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center ml-2 mr-2 shadow-sm gap-2"> 
                {socials.map((social) => {
                  const Icon = social.icon;
                  const iconSize = social.name === 'Line' ? 'w-6 h-6' : 'w-4 h-4';
                  
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.bgClass} w-9 h-9 flex items-center justify-center text-white transition-colors duration-200`}
                    >
                      <Icon className={`${iconSize} fill-current`} />
                    </a>
                  );
                })}
              </div>

              {/* Login Button */}
              <Link href={consoleUrl}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 lg:px-6 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 inline-block"
                >
                  Login
                </motion.span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {links.map((link) => {
              const isAnchorLink = link.link.includes('#') && pathname === AppRoute.home;

              if (isAnchorLink) {
                return (
                  <motion.span
                    key={link.name}
                    whileHover={{ x: 10 }}
                    className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNavClick(link.link);
                    }}
                  >
                    {link.name}
                  </motion.span>
                );
              }

              return (
                <Link key={link.name} href={link.link}>
                  <motion.span
                    whileHover={{ x: 10 }}
                    className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => handleMobileNavClick(link.link)}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              );
            })}

            {/* --- Mobile Contact Info --- */}
            <div className="px-3 py-4 border-t border-white/10 mt-2 space-y-3">
                 <div className="flex items-center space-x-3">
                    <PhoneSolidIcon className="w-4 h-4 text-pink-500" />
                    <span className="text-sm text-gray-300 hover:text-white">095-347-6002</span>
                </div>
                <div className="flex items-center space-x-3">
                    <MobileSolidIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300 hover:text-white">094-249-4880 (International Contact)</span>
                </div>
            </div>

            <Link href={consoleUrl}>
              <motion.span
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white block px-4 py-3 rounded-lg text-base font-semibold shadow-lg mt-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </motion.span>
            </Link>

            <div className="flex justify-center items-center mt-6 pb-4">
              <div className="flex shadow-sm gap-2">
               {socials.map((social) => {
                  const Icon = social.icon;
                  const iconSize = social.name === 'Line' ? 'w-7 h-7' : 'w-5 h-5';
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.bgClass} w-10 h-10 flex items-center justify-center text-white active:opacity-80`}
                    >
                      <Icon className={`${iconSize} fill-current`} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;