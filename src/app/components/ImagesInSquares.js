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
          marginLeft: "12%",
          backgroundColor: "white",
          marginTop: "15%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 200px 100px",
          zIndex: "-1",
          // marginLeft: window.innerWidth <= 1280 ? "20%" : "12%",
          // marginTop: window.innerWidth <= 1280 ? "7.5%" : "10%",
        }}
      >
        2
      </div>
      <div
        className="rounded-connie border-4 border-box-border-color xl:ml-0 "
        id="squareThree"
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          rotate: "45deg",
          marginLeft: "12%",
          marginTop: "",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 200px 100px",
          backgroundColor: "grey",
          zIndex: "-1",
          // marginLeft: window.innerWidth <= 1280 ? "16%" : "12%",
        }}
      >
        3
      </div>
    </>
  );
}
