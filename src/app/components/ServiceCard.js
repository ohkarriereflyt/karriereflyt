'use client'
import { useState } from 'react'
import { ButtonArrow } from "./index";
import Image from 'next/image';

const ServiceCardRight = ({
  svg,
  color,
  category,
  title,
  listItems = [
    { text: "Item 1 Description" },
    { text: "Item 2 Description" },
    { text: "Item 3 Description" }
  ],
  description,
  reverse = false,
}) => {

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`flex flex-col kf-border-light light-background shadow-md overflow-hidden md:flex-row${reverse ? '-reverse' : ''} min-h-[360px]`}>
      <div className={`flex-none w-full ${color}-background flex items-center justify-center p-4 md:w-1/3`}>
        {svg && (
          <Image src={svg} alt={svg} className='h-12 md:h-32 eggshell-fill' />
        )}
      </div>

      <div className="flex-grow px-6 pt-6 pb-2 md:w-2/3">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className={`${color}`}>{category}</h3>
            <h1>{title}</h1>
            <ul className="list-none mt-4">
              {listItems.map((item, index) => (
                <li key={index} className="py-2 flex items-center gap-2">
                  <svg width="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={`${color}-stroke`} d="M23.6126 11L12.8786 21.734L7.99951 16.8549" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${open ? '' : 'hidden'}`}>
            <p>{description}</p>
          </div>
          <div onClick={toggleOpen} className='self-stretch flex md:justify-start justify-end'>
            <ButtonArrow text={open ? "Lukk" : "Les mer"} direction={open ? 'up' : 'down'} color={color} onClick={toggleOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardRight;

