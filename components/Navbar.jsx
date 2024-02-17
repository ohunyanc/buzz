"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2932");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/about" ||
      router.asPath === "/contact" ||
      router.asPath === "/projects"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#94a3b8");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div style={{ backgroundColor: `${navBg}` }}
      className={
        (shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 px-4"
          : "fixed w-full h-20 z-[100] px-4")
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center w-full h-full px-2 2xl:px-16"
      >
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Image src="/assets/navLogo.png" alt="" width="125" height="50" /> */}
          <h1 className="uppercase text-textDark font-extrabold sm:text2xl text-4xl">Logo</h1>
        </motion.a>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex uppercase">
            <Link href="/about">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="ml-10 text-xl font-semibold hover:border-b"
              >
                About Us
              </motion.li>
            </Link>
            <Link href="/contact">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="ml-10 text-xl font-semibold hover:border-b"
              >
                Contact
              </motion.li>
            </Link>
            <Link href="/product">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="ml-10 text-xl font-semibold hover:border-b"
              >
                Product
              </motion.li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer p-3">
            <AiOutlineMenu size={28} />
          </div>
        </div>
      </motion.div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[64%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-500"
              : "fixed left-[-100%] p-6 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between"
            >
              <Link href="/">
                {/* <Image
                  src="/assets/navLogo.png"
                  width="87"
                  height="35"
                  alt="logo"
                /> */}
                <motion.h1 className="uppercase text-textDark font-extrabold text-xl"
                  initial={{ opacity: 0 }}
                  animate={{  opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}>Logo</motion.h1>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <motion.p
                initial={{  opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-[85%] md:w-[90%] py-2"
              >
                Build things that will stand the test of time
              </motion.p>
            </div>
          </div>
          <motion.div className="py-4 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
          >
            <ul className="uppercase text-[#94a3b8]">
              <Link href="/about">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.7, ease: "easeIn" }}
                  onClick={() => setNav(false)}
                  className="py-2 px-0 sm:py-0 sm:px-2 sm:text-4xl font-extrabold"
                >
                  About
                </motion.li>
              </Link>

              <Link href="/product">
                <motion.li
                  initial={{  opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.8, ease: "easeIn" }}
                  onClick={() => setNav(false)}
                  className="py-2 px-0 sm:py-0 sm:px-2 sm:text-4xl font-extrabold"
                >
                  Product
                </motion.li>
              </Link>
              <Link href="/contact">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{  opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.9, ease: "easeIn" }}
                  onClick={() => setNav(false)}
                  className="py-2 px-0 sm:py-0 sm:px-2 sm:text-4xl font-extrabold"
                >
                  Contact
                </motion.li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#94a3b8]">
                Let&rsquo;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duartion-500">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duartion-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duartion-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duartion-500">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
