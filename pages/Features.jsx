import Image from 'next/image'
import React from 'react'
import dribble1 from "../public/assets/office.jpg";
import  dribble2  from "../public/assets/bridge.jpg";
import  dribble3  from "../public/assets/work.jpg";

const Features = () => {
  return (
    <div>
        <h1 className="py-8 text-center justify-center text-textDark text-5xl font-extrabold">Business Services</h1>
        <div className='w-auto flex h-[100%] md:flex-row sm:flex-col gap-8 p-12 items-center justify-between'>
        <div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl">
          <figure><Image src={dribble1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Business Modeling, consumer culture and Habits</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore architecto, nihil natus libero vero!</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
        <div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl">
          <figure><Image src={dribble2} alt="img" /></figure>
          <div className="card-body">
            <h2 className="card-title">Explore!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos. Eius dignissimos id veritatis facilis?</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
        <div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl">
          <figure><Image src={dribble3} alt="img" /></figure>
          <div className="card-body">
            <h2 className="card-title">Tech Explore</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quos. Praesentium cumque soluta nisi adipisci accusantium odio! Eius, eligendi maxime.</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Features