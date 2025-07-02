10, Sa pag optimize ng font 
- first thing we need to do is to import {name ng font} from "next/font/google";
- bali ganto format: 
import {Poppins} from "next/font/google"
- next create us const with the name of font siguro as variable then = natin yung ininmport natin Font({
  subset: "latin",
  weight: ["200", "300", "400", "500", "600"],
})
- bali ganto:
const font = Poppins({
  subset: "latin",
  weight: ["200", "300", "400", "500", "600"],
})
- after that lagay lang tain sya sa body natin classname={font.className}
- bali ganto: 
<body classname={font.className}>