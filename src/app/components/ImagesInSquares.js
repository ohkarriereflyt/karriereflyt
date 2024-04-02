import { Squada_One } from "next/font/google";

export default function ImagesInSaquares() {


  return (
    <>
      <div
        id="squareOne"
        className="rounded-connie border-4 border-box-border-color lg:tra"
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          rotate: "45deg",
          marginLeft: "33%",
          backgroundColor: "black",
          zIndex: "2",

        }}
      ></div>
      <div
        className="rounded-connie border-4 border-box-border-color"
        id="squareTwo"
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          rotate: "45deg",
          marginLeft: "45%",
          backgroundColor: "black",
          marginTop: "20%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 200px 100px",
          zIndex: "-2",
        }}
      ></div>
      <div
        className="rounded-connie border-4 border-box-border-color"
        id="squareThree"
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          rotate: "45deg",
          marginLeft: "45%",
          marginTop: "-10%",
          backgroundColor: "black",
          zIndex: "-1",
        }}
      ></div>
    </>
  );
}
