"use client";
import "./globals.css";

import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: "400",
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
      // Testing absolute and position on the long run
      className="
        absolute
        top-0
        h-full
        w-full
        scroll-smooth 
        bg-primary
        text-sm
        text-black
      ">
      <body className={`
        ${poppins.className} 
        flex 
        min-h-full
        flex-col
      `}>
        <header className="flex flex-col-reverse p-10 md:flex-row">
          <nav className="
            flex 
            w-full
            shrink-0 
            flex-col 
            gap-2 
            md:w-60
          ">
            {/* MENU  */}
            {/* <Link href="/buscador">
              <Button
                className="w-full md:w-fit"
                active={pathname === "/buscador"}>
                <MagnifyingGlassIcon className="h-6 w-6" />
                Busca reseñas
              </Button>
            </Link> */}
            {/* <Link href="/enviar">
              <Button
                className="w-full md:w-fit"
                active={pathname === "/enviar"}>
                <PencilIcon className="h-6 w-6" />
                Cuenta tu historia
              </Button>
            </Link> */}
          </nav>
          <div className="
            flex
            w-full
            grow
            justify-center
            px-10
          ">
            <a href="/">
              <Image
                src="/logo.png"
                width="250"
                quality={100}
                height="0"
                alt="MierdaJobs"
              />
            </a>
          </div>
          <div className="w-full shrink-0 md:w-60">
            {/* ACCOUNT INFORMATION */}
          </div>
        </header>
        <main className="flex w-full max-w-screen-md grow justify-center self-center px-2">
          {children}
        </main>

      </body>
    </html>
  );
};

export default Layout;
