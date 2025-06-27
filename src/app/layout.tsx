import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({children}:
  { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="logo-name">
            <div>
              Avalmeos
            </div>
            <div className="space-x-5">
              <Link 
                href="/"
                className="nav-link"
              >
                Home
              </Link>
              <Link 
                href="/Dashboard"
                className="nav-link"
              >
                Dashboard
              </Link>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-slate-800 shadow-md;">
          Footer
        </footer>
      </body>
    </html>
  );
}
