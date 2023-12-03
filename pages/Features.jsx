import Image from 'next/image'
import React from 'react'
import dribble1 from "../public/assets/office.jpg";

const Features = () => {
  return (
    <div>
        <h1 className="py-8 text-center justify-center text-textDark text-5xl font-extrabold">Business Services</h1>
        <div className='w-auto flex h-[100%] md:flex-row sm:flex-col gap-8 p-12 items-center justify-between'>
        <div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl">
          <figure><Image src={dribble1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl">
          <figure><Image src={dribble1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 basis-1/3 bg-textDark shadow-xl">
          <figure><Image src={dribble1} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Features