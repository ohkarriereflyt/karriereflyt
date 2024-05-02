import { Squada_One } from "next/font/google";

export default function ImagesInSaquares() {
  return (
    <div className="md:h-0 h-[300px] flex flex-row justify-center gap-0 mt-12">
      <div
        id="squareOne"
        className="rounded-connie shadow-2xl imagesInSquares "
      >
        1<div className="imageInSquareOne"></div>
      </div>
      <div
        className="rounded-connie  shadow-2xl imagesInSquares "
        id="squareTwo"
      >
        2<div className="imageInSquareTwo"></div>
      </div>
      <div
        className="rounded-connie shadow-2xl imagesInSquares  xl:ml-0 "
        id="squareThree"
      >
        3<div className="imageInSquareThree"></div>
      </div>
    </div>
  );
}
