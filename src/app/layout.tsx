import "./globals.css";
import { ReactNode } from "react";
import {Poppins} from "next/font/google"
import NavLink from "./Components/NavLink";

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
          <nav>
            <div> 
              <NavLink label="Avalmeos" href="/"/>
            </div>
            <div className="space-x-5">
              <NavLink label="Dashboard" href="/Dashboard"/>
              <NavLink label="Register" href="/Register"/>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
};
