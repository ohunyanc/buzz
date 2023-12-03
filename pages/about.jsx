import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Features from './Features';

const About = () => {
  return (
    <section>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(../../assets/abt-bg.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold">Business Insight & Projections</h1>
            <p className="mb-5 tracking-tighter">Information Technology <span className='text-xl font-extrabold'>R & D</span> Agency for Data Integration and modeling with application to blockchain technology and Artificial Intelligence. With conception of data driven economy, it has been of imperative will to delve into the development and integration of data driven apps in the cloud and review valuable insight from indepth analysis of processes and metrics required to keep business models evolving.</p>
            <p className="mb-0 tracking-tighter">Response to market sentiment and global pivotal economic outlook regardless of trajectory.</p>
            {" "}
            <p className="mb-8 tracking-tighter">Focusing on the African economy, geography and resources, with extention to the <span className='text-xl font-extrabold'>global projections</span></p>
            <h1 className='mb-2 text-xl font-extrabold'> Subscribe to Our Monthly News Letter</h1>
            <div className="join">
              <input className="input input-bordered join-item" placeholder="Email" />
              <button className="btn join-item rounded-r-full">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </section>





  )
}

export default About