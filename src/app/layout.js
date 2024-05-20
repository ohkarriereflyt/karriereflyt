import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundBoxes from "./components/BackgroundBoxes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karriereflyt"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} eggshell-background`}>
        <BackgroundBoxes />
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
