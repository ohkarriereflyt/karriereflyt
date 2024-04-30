"use client";

import React, { useEffect, useState } from "react";
import BackgroundBoxes from "./BackgroundBoxes";
import Footer from "./Footer";

export default function FooterAndBoxes() {
  const [contentHeight, setContentHeight] = useState("100vh");

  useEffect(() => {
    const footerElement = document.querySelector("footer");
    if (footerElement) {
      const footerHeight = footerElement.offsetHeight;
      const windowHeight = window.innerHeight;
      const newContentHeight = windowHeight - footerHeight + "px";
      console.log("Footer Height:", footerHeight);
      console.log("Window Height:", windowHeight);
      console.log("New Content Height:", newContentHeight);
      setContentHeight(newContentHeight);
    }
  }, []);

  return (
    <div id="boxCollection" style={{ minHeight: contentHeight }}>
      <BackgroundBoxes />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
