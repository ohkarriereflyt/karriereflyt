"use client";
import { useState } from "react";
import Sertifications from "./Sertifications";
import ButtonArrow from "./ButtonArrow";

export default function JobbkretserPartner({
  jobbkretserTitle,
  jobbkretserContItems,
  jobbkretserImage,
  jobbkretserReadMore,
}) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full slate-gray-background">
      <div className="max-w-7xl w-full mx-auto p-8 light">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col justify-end lg:mb-8 md:text-left text-center">
            <h1 className="mb-10 md:mb-0">{jobbkretserTitle}</h1>
          </div>
          <div className="relative row-span-2 m-auto">
            <img className="bannerImage" src={jobbkretserImage} alt="" />
            <div className="xl:w-60 xl:h-60 sm:h-36 sm:w-36 h-28 w-28 relative xl:m-44 m-20 sm:m-24">
              <div
                id="kretsBox1"
                className="sharedBoxClass top-full left-1/2 kf-border-light-big"
              ></div>
              <div
                id="kretsBox2"
                className="sharedBoxClass top-1/2 left-0 kf-border-light-big"
              ></div>
              <div
                id="kretsBox3"
                className="sharedBoxClass top-0 left-1/2 kf-border-light-big"
              ></div>
              <div
                id="kretsBox4"
                className="sharedBoxClass top-1/2 left-full kf-border-light-big"
              ></div>
            </div>
          </div>
          <div>
            <Sertifications jobbkretserContItems={jobbkretserContItems} />
            {open && (
              <div className="mt-4">
                <p>{jobbkretserReadMore}</p>
              </div>
            )}
            <div
              onClick={toggleOpen}
              className="flex md:justify-normal justify-end"
            >
              <ButtonArrow
                text={open ? "Lukk" : "Les mer"}
                direction={open ? "up" : "down"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
