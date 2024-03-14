import Image from "next/image";

export default function OurHistorySection() {
  return (
    <div className="flex flex-wrap items-center justify-between -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">Vår historie</h2>
        <p>
          Karriereflyt AS ble stiftet i 2022 av Øyvind Haugen, som har sin
          bakgrunn i bedriftsøkonomiske fag- i tillegg til en stabil erfaring
          fra rekruttering og bemanning som skal til for at både kandidater og
          kunder skal bli fornøyde.
        </p>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <Image
          src="/path/to/your/history-image.jpg"
          alt="Vår historie"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
    </div>
  );
}
