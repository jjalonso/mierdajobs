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
      className="
      flex
      min-h-full
      w-full
      justify-center
      bg-gradient-to-b
      from-[#5a40c4] 
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
