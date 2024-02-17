"use client"

import React from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-6 flex justify-center items-center">
        <div>
          <motion.p initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }} className="uppercase text-sm tracking-widest text-gray-600 py-6">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro modi corrupti, quis incidunt sequi nihil dolorem autem accusamus, corporis voluptatem dolorum itaque optio sapiente distinctio.
          </motion.p>
          <motion.h1 initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }} className="py-2 to-gray-700">
            Lorem, ipsum. <span className="text-textDark uppercase sm:text-4xl text-5xl font-extrabold">Lorem.</span>
          </motion.h1>
          <motion.h1 initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }} className="py-2 text-gray-700">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }} className="py-2 text-gray-600 sm:max-w-[90%] max-w-[70%] mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero
            quae sit libero nihil fugiat culpa officiis, cupiditate molestias
            ipsum vel, voluptatibus pariatur. Aliquid, nihil!
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero
            quae sit libero nihil fugiat culpa officiis, cupiditate molestias
            ipsum vel, voluptatibus pariatur. Aliquid, nihil!

          </motion.p>
          <div className="flex items-center justify-between max-w-[330px] mx-auto py-2">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, ease: "easeIn" }}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duartion-300"
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, ease: "easeIn" }}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duartion-300"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, ease: "easeIn" }}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duartion-300"
            >
              <AiOutlineMail />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, ease: "easeIn" }}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duartion-300"
            >
              <BsFillPersonLinesFill />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
