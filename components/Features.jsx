import Image from 'next/image'
import React from 'react'
import dribble1 from "../public/assets/office.jpg";
import dribble2 from "../public/assets/bridge.jpg";
import dribble3 from "../public/assets/work.jpg";
import { motion, useScroll } from "framer-motion"

const Features = () => {
  return (
    <div>
      <motion.h1 className="py-8 text-center justify-center text-textDark text-5xl font-extrabold"
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>Business Services</motion.h1>
      <div className='w-auto flex h-[100%] md:flex-row sm:flex-col gap-8 p-12 items-center justify-between'>
        <motion.div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <figure><Image src={dribble1} alt="Shoes" /></figure>
          <div className="card-body">
            <motion.h2 className="card-title" initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}>Business Modeling, Consumer Culture and Habits...</motion.h2>
            <motion.p initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore architecto, nihil natus libero vero!</motion.p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </motion.div>
        <motion.div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}>
          <figure><Image src={dribble2} alt="img" /></figure>
          <div className="card-body">
            <motion.h2 className="card-title" initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}>Explore...Tech and Society</motion.h2>
            <motion.p initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos. Eius dignissimos id veritatis facilis?</motion.p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </motion.div>
        <motion.div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} 
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}>
          <figure><Image src={dribble3} alt="img" /></figure>
          <div className="card-body">
            <motion.h2 className="card-title" initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}>Tech Exploration and Development</motion.h2>
            <motion.p initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quos. Praesentium cumque soluta nisi adipisci accusantium odio! Eius, eligendi maxime.</motion.p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>

  )
}

export default Features