import { Squada_One } from "next/font/google";

export default function ImagesInSaquares({ images }) {
  return (
    <div className="md:h-0 h-[300px] flex flex-row justify-center gap-0 mt-12">
      {images && images.length >= 3 && (
        <>
          <div
            id="squareOne"
            className="rounded-connie shadow-2xl imagesInSquares "
          >
            <img src={images[0]} alt="Square One" className="imageInSquareOne" />
          </div>
          <div
            className="rounded-connie shadow-2xl imagesInSquares "
            id="squareTwo"
          >
            <img src={images[1]} alt="Square Two" className="imageInSquareTwo" />
          </div>
          <div
            className="rounded-connie shadow-2xl imagesInSquares xl:ml-0 "
            id="squareThree"
          >
            <img src={images[2]} alt="Square Three" className="imageInSquareThree" />
          </div>
        </>
      )}
    </div>
  );
}
