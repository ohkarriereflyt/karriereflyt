import { Squada_One } from "next/font/google";

export default function ImagesInSaquares({ images }) {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[45%] lg:max-w-full max-w-72 aspect-square m-[30%] md:m-[190px] flex-shrink-0">
        <div className="absolute w-full h-full rotate-45 translate-x-[21%] translate-y-[42%]">
          <div className="kf-border-light w-full h-full shadow-2xl">
            <img src={images[0]} alt="Square One" className="object-cover w-full h-full -rotate-45 scale-[1.4]" />
          </div>
        </div>
        <div className="absolute w-full h-full rotate-45 translate-x-[42%] -translate-y-[42%]">
          <div className="kf-border-light w-full h-full shadow-2xl">
            <img src={images[1]} alt="Square Two" className="object-cover w-full h-full -rotate-45 scale-[1.4]" />
          </div>
        </div>
        <div className="absolute w-full h-full rotate-45 -translate-x-[42%]">
          <div className="kf-border-light w-full h-full shadow-2xl">
            <img src={images[2]} alt="Square Three" className="object-cover w-full h-full -rotate-45 scale-[1.4]" />
          </div>
        </div>
      </div>
    </div>
  );
}
