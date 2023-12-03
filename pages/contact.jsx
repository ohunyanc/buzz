import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import Image from "next/image";
import mess from "@/public/assets/message.jpg";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-screen h-auto ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mess}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-4 text-4xl font-extrabold">Contact Us</h2>
          <h3>Consultation | Cloud, Data Integration & Web Development Services</h3>
        </div>
      </div>
      <div className="flex justify-around items-center py-2 md:py-4 mx-10 sm:mx-5 md:flex-row flex-col">
        <div className="md:w-1/2 w-full md:p-10 my-10 md:my-0 flex-col">
          <h1 className="font-extrabold sm:text-2xl text-textDark mt-20">Get In Touch</h1>
          <p className="text-textDark font-semibold text-sm my-5">
            {" "}
            Send us a message & we will get back to you within 24 hours.
          </p>
          <div className="flex-col my-20 gap-5 flex">
            <div className="flex gap-5 p-4 border border-textDark hover:border-textPurple md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              {/* icon */}
              <BsTelephoneFill className="text-xl text-textDark font-semibold group-hover:text-textPurple" />
              <p className="text-textDark text-base font-semibold group-hover:text-textPurple">
                +234-(706)-470-35.x.x
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-textDark hover:border-textPurple md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              {/* icon */}
              <GrMail className="text-xl text-textDark font-semibold group-hover:text-textPurple" />
              <p className="text-textDark text-base font-semibold group-hover:text-textPurple">
                info@address.com
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-textDark hover:border-textPurple md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              {/* icon */}
              <HiLocationMarker className="text-xl text-textDark font-semibold group-hover:text-textPurple" />
              <p className="text-textDark text-base font-semibold group-hover:text-textPurple">
                Gidi, NG
              </p>
            </div>
          </div>

          <div className="ml-4 flex gap-8 justify-center md:justify-start">
            <FaInstagram className="text-2xl text-textLight hover:text-textPurple cursor-pointer" />
            <FaTwitter className="text-2xl text-textLight hover:text-textPurple cursor-pointer" />
            <FaLinkedinIn className="text-2xl text-textLight hover:text-textPurple cursor-pointer" />
            <FaYoutube className="text-2xl text-textLight hover:text-textPurple cursor-pointer" />
            <FaTiktok className="text-2xl text-textLight hover:text-textPurple cursor-pointer" />
          </div>
        </div>

        {/* contact form */}
        <div className="bg-textLight p-14 rounded-lg shadow-md my-8">
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-10">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
                placeholder="First Name"
                required={true}
              
              />
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
                placeholder="Last Name"
                required={true}
              
              />
            </div>
            <input
                type="email"
                name="email"
                id="email"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
                placeholder="Email"
                required={true}
              
              />
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
                placeholder="Subject"
                required={true}
              
              />
              <div className="flex justify-center">
              <textarea
                rows={3}
                id="text_area"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
                placeholder="Your Message"
                required={true}
              
              ></textarea>
              </div>
              <button type="submit" className="text-white bg-textPurple hover:bg-teal-200 hover:texgr800 focus:ring-4 focus:outline-none focus:ring-teal-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send Message</button>
              
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
