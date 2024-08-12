"use client";
import { useState } from "react";
import Image from "next/image";
import TransitionWave from "./TransitionWave";
import ButtonArrow from "./ButtonArrow";

export default function OurHistorySection({
  title = "Main Section Title",
  text = "Main Section Text",
  img = "Image URL",
}) {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  const toggleReadMore = () => {
    setReadMoreOpen(!readMoreOpen);
  };

  return (
    <>
      <TransitionWave />
      <div className="flex justify-center w-full px-4 py-8 md:px-8 slate-gray-background light -mb-1">
        <div className="max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full px-4 m-6 lg:mb-0">
            <h2 id="fontNormal" className="text-3xl  mb-4">
              {title}
            </h2>
            <p
              className={`${
                readMoreOpen ? "" : "line-clamp-3 md:line-clamp-5"
              }`}
            >
              {text}
            </p>
            <button
              onClick={toggleReadMore}
              className="no-style flex items-center"
            >
              <ButtonArrow
                direction={`${readMoreOpen ? "up" : "down"}`}
                text={`${readMoreOpen ? "Lukk" : "Les mer"}`}
              />
            </button>
          </div>
          <div className=" bg-slate-gray-flat kf-border-light w-full">
            <img
              className="h-full w-full object-cover"
              src={img}
              alt={"Bilde som representerer vår historie"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
