'use client'
import { useEffect } from "react";

export default function BackgroundBoxes() {
  useEffect(() => {
    const background1 = document.getElementById("background-1");
    const background2 = document.getElementById("background-2");
    const background3 = document.getElementById("background-3");
    const background4 = document.getElementById("background-4");
    const background5 = document.getElementById("background-5");
    const background6 = document.getElementById("background-6");

    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (lastScroll !== currentScroll) {
        lastScroll = currentScroll;
        requestAnimationFrame(() => {
          background1.style.top = `${-currentScroll * 0.5}px`;
          background2.style.top = `${-currentScroll * 0.6}px`;
          background3.style.top = `${-currentScroll * 0.4}px`;
          background4.style.top = `${-currentScroll * 0.5}px`;
          background5.style.top = `${-currentScroll * 0.6}px`;
          background6.style.top = `${-currentScroll * 0.5}px`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="boxCollection">
      <div className="backgroundBox" id="background-1"></div>
      <div className="backgroundBox" id="background-2"></div>
      <div className="backgroundBox" id="background-3"></div>
      <div className="backgroundBox" id="background-4"></div>
      <div className="backgroundBox" id="background-5"></div>
      <div className="backgroundBox" id="background-6"></div>
    </div>
  );
}
