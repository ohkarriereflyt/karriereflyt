'use client';
import { useState } from 'react';
import Image from "next/image";
import TransitionWave from "./TransitionWave";
import ButtonArrow from "./ButtonArrow";


export default function OurHistorySection() {
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
            <h2 className="text-3xl font-bold mb-4">Vår historie</h2>
            <p className={`${readMoreOpen ? '' : 'line-clamp-3'}`}>
              Karriereflyt AS ble stiftet i 2022 av Øyvind Haugen, som har sin bakgrunn i bedriftsøkonomiske fag- i tillegg til en stabil erfaring fra rekruttering og bemanning som skal til for at både kandidater og kunder skal bli fornøyde. Selskapet er et nytenkende byrå rundt fokuset ved kandidatutvelgelser og behovsanalyser hos kunder. Et av våre viktigste prinsipp er at kandidater presenteres og blir vurdert ut ifra et helhetlig bilde, hvor vi ser kandidaten fra andre perspektiv enn bare erfaring, skole og karakterer. Våre kandidater skal bli vurdert som en potensiell ressurs også ut ifra personlige evner og egenskaper. Kunder skal hos oss vite at deres behov blir hørt, hvor vi går i dybden av måter å komme fram til en leveranse som skaper synergi og flyt i deres drift. Kandidater som formidles av Karriereflyt skal alltid være engasjert i tråd med preferanser og behov som er redegjort i forkant av ansettelse/utleie.
            </p>
            <button onClick={toggleReadMore} className="no-style flex items-center">
              <ButtonArrow direction={`${readMoreOpen ? 'up' : 'down'}`} text={`${readMoreOpen ? 'Lukk' : 'Les mer'}`}/>
            </button>
          </div>
          <div className="w-6/12 px-4 bg-gray-50 kf-border-dark">
            <Image
              src="/path/to/your/history-image.jpg"
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
