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
      <head>
        <meta property="og:title" content= "Karriereflyt - Rekruttering & Bemanning"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.karriereflyt.no" />
        <meta property="og:description" content="Karriereflyt hjelper deg med å finne drømmejobben" />
        <meta property="og:image" content="https://karriereflyt.no/logo-pistasch.png" />
      </head>
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
