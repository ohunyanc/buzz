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
          <div className="max-w-md py-15">
            <motion.h1 className="mb-5 text-5xl font-extrabold " 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}>Business Insight & Projections</motion.h1>
            <motion.p className="mb-5 tracking-tighter"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}>Information Technology <span className='text-xl font-extrabold'>R & D</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore</motion.p>
            <motion.p className="mb-0 tracking-tighter" initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore, Lorem ipsum dolor</motion.p>
            {" "}
            <motion.p className="mb-8 tracking-tighter" initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore <span className='text-xl font-extrabold'>architecto, nihil natus libero vero!</span></motion.p>
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