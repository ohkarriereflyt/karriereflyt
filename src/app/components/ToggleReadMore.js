'use client'
import { useState } from 'react';
import ButtonArrow from "./ButtonArrow";

export default function ToggleReadMore({ text }) {
    const [readMoreOpen, setReadMoreOpen] = useState(false);

    const toggleReadMore = () => {
        setReadMoreOpen(!readMoreOpen);
    }

    return (
        <>
            <p className={`${readMoreOpen ? '' : 'line-clamp-4'}`}>
                {text}
            </p>
            <div className='flex justify-end w-full'>
                <button onClick={toggleReadMore} className="no-style flex items-center">
                  <ButtonArrow direction={`${readMoreOpen ? 'up' : 'down'}`} text={`${readMoreOpen ? 'Lukk' : 'Les mer'}`} color='dark'/>
                </button>
            </div>
        </>
    );
}