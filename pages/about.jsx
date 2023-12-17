import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Features from '../components/Features';
import {motion} from 'framer-motion'

const About = () => {
  return (
    <section>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(../../assets/abt-bg.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <motion.h1 className="mb-5 text-5xl font-extrabold" 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}>Business Insight & Projections</motion.h1>
            <motion.p className="mb-5 tracking-tighter"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}>Information Technology <span className='text-xl font-extrabold'>R & D</span> Agency for Data Integration and modeling with application to blockchain technology and Artificial Intelligence. With conception of data driven economy, it has been of imperative will to delve into the development and integration of data driven apps in the cloud and review valuable insight from indepth analysis of processes and metrics required to keep business models evolving.</motion.p>
            <motion.p className="mb-0 tracking-tighter" initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}>Response to market sentiment and global pivotal economic outlook regardless of trajectory.</motion.p>
            {" "}
            <motion.p className="mb-8 tracking-tighter" initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}>Focusing on the African economy, geography and resources, with extention to the <span className='text-xl font-extrabold'>global projections</span></motion.p>
            <motion.h1 className='mb-2 text-xl font-extrabold' 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}> Subscribe to Our Monthly Newsletter</motion.h1>
            <motion.div className="join" initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}>
              <input className="input input-bordered join-item" placeholder="Email" />
              <button className="btn join-item rounded-r-full"
              >Subscribe</button>
            </motion.div>
          </div>
        </div>
      </div>
      <Features />
    </section>





  )
}

export default About