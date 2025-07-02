import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";
import {Poppins} from "next/font/google"

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
})

export default function RootLayout({children}:
  { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <header>
          <nav>
            <div>
              <Link 
                href="/"
                className="nav-link"
              >
                Avalmeos
              </Link>
            </div>
            <div className="space-x-5">
              <Link 
                href="/Dashboard"
                className="nav-link"
              >
                Dashboard
              </Link>

              <Link 
                href="/Register"
                className="nav-link"
              >
                Register
              </Link>
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
}
