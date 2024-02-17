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
      initial={{ opacity: 0, x: 10 }}
      whileInView={{
          opacity: 1,
          y: 0,
          transition: {
              delay: 0.6,
              duration: 0.5,
          }
      }}
      viewport={{ once: true }}>Business Services</motion.h1>
      <div className='w-auto flex h-[100%] md:flex-row sm:flex-col gap-4 p-8 items-center justify-between'>
        <motion.div className="card card-compact w-66 basis-1/3 bg-textDark shadow-xl"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                  delay: 0.7,
                  duration: 1.0,
              }
          }}
          viewport={{ once: true }}>
          <figure><Image src={dribble1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title sm:text-sm" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae est dolor, asperiores consequuntur iusto!</h2>
            <p className='sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore architecto, nihil natus libero vero!</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </motion.div>
        <motion.div className="card card-compact w-66 basis-1/3 bg-textDark shadow-xl"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                  delay: 0.8,
                  duration: 1.0,
              }
          }}
          viewport={{ once: true }}>
          <figure><Image src={dribble2} alt="img" /></figure>
          <div className="card-body">
            <h2 className="card-title sm:text-sm">Explore...Tech and Society</h2>
            <p className='sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos. Eius dignissimos id veritatis facilis?</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </motion.div>
        <motion.div className="card card-compact w-66 basis-1/3 bg-textDark shadow-xl"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                  delay: 0.9,
                  duration: 1.0,
              }
          }}
          viewport={{ once: true }}
          ><figure><Image src={dribble3} alt="img" /></figure>
          <div className="card-body">
            <h2 className="card-title sm:text-sm">Tech Exploration and Development</h2>
            <p className='sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quos. Praesentium cumque soluta nisi adipisci accusantium odio! Eius, eligendi maxime.</p>
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