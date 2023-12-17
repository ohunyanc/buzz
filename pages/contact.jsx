import React, { useState, useEffect } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FcApproval } from 'react-icons/fc';
import { GrMail } from "react-icons/gr";

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import Image from "next/image";
import mess from "@/public/assets/message.jpg";
import dayjs from 'dayjs';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
const Contact = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = {
            firstname,
            lastname,
            email,
            subject,
            message
        }

        const response = await fetch('/api/submit1', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const content = await response.json()

        console.log(content)
        alert(content.data.tableRange)

        setMessage('')
        setSubject('')
        setFirstname('')
        setLastname('')
        setEmail('')

        console.log(form)
    }

  

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
          priority
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
        <div className="bg-textLight p-12 rounded-lg shadow-md my-8">
          <form onSubmit={handleSubmit}>
            

            <div className="grid xl:grid-cols-2 xl:gap-10">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
                placeholder="First Name"
                required={true}
                onChange={(e)=> {
                  setFirstname(e.target.value)
                }}
                value={firstname}

              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
                placeholder="Last Name"
                required={true}
                onChange={(e)=> {
                  setLastname(e.target.value)
                }}
                value={lastname}
              />
            </div>

            <input
              type="email"
              name="email"
              id="email"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
              placeholder="Email"
              required={true}
              onChange={(e)=> {
                setEmail(e.target.value)
              }}
              value={email}

            />

            <input
              type="text"
              name="subject"
              id="subject"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
              placeholder="Subject"
              required={true}
              onChange={(e)=> {
                setSubject(e.target.value)
              }}
              value={subject}

            />
            <div className="flex justify-center">
              <textarea
                rows={3}
                name="message"
                id="text_area"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-textDark bg-textLight bg-clip-padding border border-solid border-textDark rounded-md transition ease-in-out m-0 focus:text-white focus:bg-textPurple focus:border-white focus:outline-none "
                placeholder="Your Message"
                required={true}
                onChange={(e)=> {
                  setMessage(e.target.value)
                }}
                value={message}

              ></textarea>
            </div>

            <button type="submit" className="text-white bg-textPurple hover:bg-teal-200 hover:texgr800 focus:ring-4 focus:outline-none focus:ring-teal-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              
                <div className="flex justify-center items-center gap-2">
                <RiMailSendLine size={20} />
                <p>Send Message</p>
              </div>
              
              </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
