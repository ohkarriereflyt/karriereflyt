'use client';
import { useState } from 'react';
import Image from "next/image";
import TransitionWave from "./TransitionWave";
import ButtonArrow from "./ButtonArrow";


export default function OurHistorySection({title = "Main Section Title", text = "Main Section Text", img = "Image URL"}) {
  const [readMoreOpen, setReadMoreOpen] = useState(false); // Using useState to manage toggle state

  const toggleReadMore = () => {
    setReadMoreOpen(!readMoreOpen); // Correct way to toggle state in functional components
  }
  
  return (
    <>
      <TransitionWave />
      <div className="flex justify-center w-full px-4 py-8 md:px-8 slate-gray-background light -mb-1">
        <div className="max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-6/12 px-4 m-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className={`${readMoreOpen ? '' : 'line-clamp-3'}`}>
              {text}
            </p>
            <button onClick={toggleReadMore} className="no-style flex items-center">
              <ButtonArrow direction={`${readMoreOpen ? 'up' : 'down'}`} text={`${readMoreOpen ? 'Lukk' : 'Les mer'}`}/>
            </button>
          </div>
          <div className="w-6/12 px-4 bg-gray-50 kf-border-dark">
            <img
              src={img}
              alt="Vår historie"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
}
