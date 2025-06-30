SPA - Single Page Application
- Dito is nasa isang html file lang lahat ng file pages natin 

SSR- Server Side Rendering
- Dito naman bawat pages na meron tayo is meron ding laman yon na html file
1, Advantage nito is meron syang SEO - Search Engine Optimization - Meaning meron tayong meta data rito na may lamang description, content, and so. Na related sa app natin kumbaga once na may isang user na nag search, then yung sinearch nya is tugma sa meta data description natin-ang unang lalabas is yung application natin. 

NEXT.JS NOTES
0, First diba we have src/app na may lamang global.css, layout.tsx, and page.tsx.
Yung layout.tsx natin sa loob nung src/app is sya yung nagsisilbi nating app.tsx.

1, export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

2, import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({children}:
  { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href=""></a>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          Footer
        </footer>
      </body>
    </html>
  );
}

3, Sa pag route, example: need natin ng about page, need lang natin na mag create ng folder and then lagyan natin ng laman na page.tsx -- Ngayon sa localhost3000 natin slash lang tayo then, lagay lang natin yung pangalan ng folder name. Then kung ano yung folder name na nakalagay ayun yung lilitaw sa screen natin.

4, Diba ang paggamit ng Link sa react is: <Link to"/Home">Home</Link>
Pero sa Next.js is:
<Link href"/Home">Home</Link>

5, Kung gusto pa natin maglagay ng next page sa loob ng dashboard natin example vi-view natin yung user page, gawa lang tayo ng folder sa loob ng dashboard na may name na User. Then, link lang natin sya ng href"/Dashboard/User"

6, Pag gagamit tayo ng mgs react hooks, need lang natin na maglagay ng "use client" sa taas sa import place.

7, label and input is magka-partner sa label gamit lang tayo ng HTMLFor="email" then sa input natin lagay lang tayo ng id"email"
- Kumbaga need lang natin na i-match yung nakalagay sa label natin na HTMLFor="" and id="" sa input, ang function nito once na clinick ni user yung label natin is automatically na mafo-focus yung input natin.