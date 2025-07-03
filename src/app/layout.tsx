import "./globals.css";
import { ReactNode } from "react";
import {Poppins} from "next/font/google"
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export default function RootLayout({children}:
  {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <header>
          <Navigation/>
        </header>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
};
