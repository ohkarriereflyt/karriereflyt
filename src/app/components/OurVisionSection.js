'use client';
import { useState } from 'react';
import TransitionLine from "./TransitionLine";
import ButtonArrow from "./ButtonArrow";

export default function OurVisionSection({ title = "Our Vision Title", text = "Our Vision Text", img = "Image URL" }) {
  const [readMoreOpen, setReadMoreOpen] = useState(false); // Using useState to manage toggle state

  const toggleReadMore = () => {
    setReadMoreOpen(!readMoreOpen);
  }
  return (
    <div className="background-blur -my-1" >
      <TransitionLine reverse={true} />
      <div className="flex justify-center w-full md:px-8 mb-2  px-4 py-12">
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between">
          <div className=' bg-slate-gray-flat kf-border-light w-full'>
            <img className='h-full w-full object-cover' src={img} alt={'Bilde som representerer vår visjon'} />
          </div>
          <div className="w-full px-4 m-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className={`${readMoreOpen ? '' : 'line-clamp-3'}`}>
              {text}
            </p>
            <button onClick={toggleReadMore} className="no-style flex items-center">
              <ButtonArrow direction={`${readMoreOpen ? 'up' : 'down'}`} text={`${readMoreOpen ? 'Lukk' : 'Les mer'}`} color='dark' />
            </button>
          </div>
        </div>
      </div>
      <TransitionLine />
    </div>
  );
}
