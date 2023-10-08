"use client";
import "./globals.css";

import { MagnifyingGlassIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LayoutProps from "./layout.props";

import { Button } from "@/components/button";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <html
      lang="es"
      className="
        h-full
        scroll-smooth
        bg-primary 
        text-sm
        text-black
      ">
      <body className={`
        ${poppins.className} 
        flex 
        flex-col 
        md:gap-y-20
      `}>
        <header className="flex flex-col-reverse gap-6 p-10 md:flex-row">
          <nav className="
            flex 
            w-full
            shrink-0 
            flex-col 
            gap-2 
            md:w-60
          ">
            {/* MENU  */}
            <Link href="/buscador">
              <Button
                className="w-full md:w-fit"
                active={pathname === "/buscador"}>
                <MagnifyingGlassIcon className="h-6 w-6" />
                Buscar reseñas
              </Button>
            </Link>
            <Link href="/enviar">
              <Button
                className="w-full md:w-fit"
                active={pathname === "/enviar"}>
                <PencilIcon className="h-6 w-6" />
                Enviar reseña
              </Button>
            </Link>
          </nav>
          <div className="
            flex
            w-full
            grow
            justify-center 
            px-16 
          ">
            <a href="/">
              <Image
                src="/logo.svg"
                width="250"
                height="0"
                alt="logo"
              />
            </a>
          </div>
          <div className="w-full shrink-0 md:w-60">
            {/* ACCOUNT INFORMATION */}
          </div>
        </header>
        <main className="flex justify-center p-2 pb-20">
          {children}
        </main>

      </body>
    </html>
  );
};

export default Layout;
