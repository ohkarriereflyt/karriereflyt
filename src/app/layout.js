import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import footerAndBoxes from "./components/footerAndBoxes";
import BackgroundBoxes from "./components/BackgroundBoxes";
import  Footer  from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="main" className={inter.className}>
        <Navbar />
        <div id="boxCollection">
          <BackgroundBoxes />
          <div className="mt-20">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
