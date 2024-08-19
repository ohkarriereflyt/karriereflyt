"use client";
import Link from "next/link";
import ButtonArrow from "../../../components/ButtonArrow";
import { useState, useEffect } from "react";

export default function JobPostsTop(props) {
  // Sanity
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full slate-gray-background shadow flex justify-center">
      <div className="max-w-7xl p-4 pb-0 flex flex-col justify-start items-center relative z-10">
        <div className="w-full justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 self-stretch py-4 pt-6 gap-1 flex-col justify-start items-start inline-flex light">
            <h1>{props.topSectionTitle}</h1>
            <h2>{props.topSectionSubTitle}</h2>
            <p className={`${isExpanded ? "" : "line-clamp-1"}`}>
              {props.topSectionText}
            </p>
          </div>
        </div>
        <div className="w-full justify-between items-center inline-flex">
          <Link
            href="https://karriereflyt.recman.no/register.php"
            target="_blank"
          >
            <button className="button">Send en åpen søknad</button>
          </Link>
          <div onClick={toggleExpand}>
            <ButtonArrow
              direction={`${isExpanded ? "up" : "down"}`}
            ></ButtonArrow>
          </div>
        </div>
      </div>
    </div>
  );
}
