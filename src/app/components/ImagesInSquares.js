import { Squada_One } from "next/font/google";

export default function ImagesInSaquares() {
  return (
    <>
      <div
        id="squareOne"
        className="rounded-connie shadow-2xl imagesInSquares lg:tra"
      >
        <div className="imageInSquareOne"></div>
      </div>
      <div
        className="rounded-connie  shadow-2xl imagesInSquares "
        id="squareTwo"
      >
        <div className="imageInSquareTwo"></div>
      </div>
      <div
        className="rounded-connie shadow-2xl imagesInSquares  xl:ml-0 "
        id="squareThree"
      >
        <div className="imageInSquareThree"></div>
      </div>
    </>
  );
}
