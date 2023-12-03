import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import  dribble1  from "../public/assets/office.jpg";
import  dribble2  from "../public/assets/bridge.jpg";
import  dribble3  from "../public/assets/work.jpg";
import { FaGithubSquare, FaYoutube } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Commitment to Service"/>
      <div className="p-2 w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/*Project one*/}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <Link href="/" className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={dribble1}
                alt="image"
              />
            </div>
          </Link>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <h3 className="text-2xl font-bold">Growth Insight 2.0</h3>
            <p className="bg-textLight border-b border-gray-700 text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              <span className="text-white">Aliquid, libero</span>. Assumenda
              quis similique,{" "}
              <span className="text-white">
                quia error praesentium temporibus odit?
              </span>{" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              <span className="text-textwhitePurple">Aliquid, libero</span>. Assumenda
              quis similique,{" "}
              <span className="text-white">
                quia error praesentium temporibus odit?
              </span>

            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>MongoDB</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <FaGithubSquare />
              </Link>
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <FaYoutube />
              </Link>
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*Project two*/}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <Link href="/" className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={dribble2}
                alt="image"
              />
            </div>
          </Link>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
            
            <h3 className="text-2xl font-bold">Delegation & Value In Adventure 2.0</h3>
            <p className="bg-textLight border-b border-gray-700 text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              <span className="text-white">Aliquid, libero</span>. Assumenda
              quis similique,{" "}
              <span className="text-white">
                quia error praesentium temporibus odit?
              </span>{" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              <span className="text-white">Aliquid, libero</span>. Assumenda
              quis similique,{" "}
              <span className="text-white">
                quia error praesentium temporibus odit?
              </span>

            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>MongoDB</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <FaGithubSquare />
              </Link>
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <FaYoutube />
              </Link>
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*Project three*/}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <Link href="/" className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={dribble3}
                alt="image"
              />
            </div>
          </Link>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <h3 className="text-2xl font-bold">Productivity Leverage & Output 2.0</h3>
            <p className="bg-textLight border-b border-gray-700 text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              <span className="text-white">Aliquid, libero</span>. Assumenda
              quis similique,{" "}
              <span className="text-white">
                quia error praesentium temporibus odit?
              </span>{" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              <span className="text-white">Aliquid, libero</span>. Assumenda
              quis similique,{" "}
              <span className="text-white">
                quia error praesentium temporibus odit?
              </span>

            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>MongoDB</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <FaGithubSquare />
              </Link>
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <FaYoutube />
              </Link>
              <Link
                href="/"
                className="hover:text-textGreen duration-300"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
