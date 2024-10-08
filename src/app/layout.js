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
        <meta property="og:description" content="Ta kontakt med oss for bistand!" />
        <meta property="og:image" content="https://karriereflyt.no/logo-slategray.png" />

{/* Google tag (gtag.js) */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q96T7CX267"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q96T7CX267');
            `,
          }}
        />

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
