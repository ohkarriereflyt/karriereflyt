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
          backgroundColor: "pink",
          marginTop: "10%",
          zIndex: "2",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        1
      </div>
      <div
        className="rounded-connie border-4 border-box-border-color"
        id="squareTwo"
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          rotate: "45deg",
          marginLeft: "45%",
          backgroundColor: "white",
          marginTop: "15%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 200px 100px",
          zIndex: "-1",
        }}
      >
        2
      </div>
      <div
        className="rounded-connie border-4 border-box-border-color"
        id="squareThree"
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          rotate: "45deg",
          marginLeft: "45%",
          marginTop: "",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 200px 100px",
          backgroundColor: "grey",
          zIndex: "-1",
        }}
      >
        3
      </div>
    </>
  );
}
