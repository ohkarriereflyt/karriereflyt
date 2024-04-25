import Image from "next/image";
import TransitionLine from "./TransitionLine";
import TransitionWave from "./TransitionWave";

export default function OurHistorySection() {
  return (
    <>
      <TransitionWave />
      <div className="flex justify-center w-full px-4 py-8 md:px-8 slate-gray-background light -mb-1">
        <div className="max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full px-4 m-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Vår historie</h2>
            <p>
              Karriereflyt AS ble stiftet i 2022 av Øyvind Haugen, som har sin
              bakgrunn i bedriftsøkonomiske fag- i tillegg til en stabil erfaring
              fra rekruttering og bemanning som skal til for at både kandidater og
              kunder skal bli fornøyde.
            </p>
          </div>
          <div className="w-full px-4 bg-gray-50 kf-border-dark">
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
