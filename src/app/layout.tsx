"use client";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  // const pathname = usePathname();
  return (
    <html
      lang="es"
      // NOTE: Testing absolute and top-0 on the long run 
      // On chrome mobile, sometimes the URL browser is hidden when scrolling, 
      // this cause a gap at the bottom of the landing page just under the hand.
      // scroll-smooth bg-gradient-to-b from-[#5a40c4] via-[#b15da0]
      // absolute
      // top-0
      className="
      flex
      min-h-full
      w-full
      justify-center
      bg-gradient-to-b
      from-[#5b21b6] 
      via-[#6b21a8] 
      to-[#be185d] 
      text-sm
      text-black
    ">
      <body className={`
        ${poppins.className} 
        flex
        min-h-full
        w-full
        flex-col
        px-4
      `}>
        {children}
      </body >
    </html >
  );
};

export default Layout;
