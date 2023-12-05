import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import Script from "next/script";
import { getServerSession } from "next-auth";

import "./globals.css";
import authOptions from "./(auth)/api/auth/_options/options";
import SessionProvider from "./session-provider";

import Footer from "@/components/footer";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://mierdajobs.com"),
  title: {
    default: "MierdaJobs",
    template: "%s - MierdaJobs"
  },
  description: "Busca y publica reseñas de negocios con condiciones laborales precarias e ilegales en una plataforma anonima."
}

const Layout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session}>
      <html
        lang="es"
        className="
      flex
      min-h-full
      w-full
      justify-center
      bg-gradient-to-b
      from-[#5b21b6] 
      via-[#6b21a8] 
      to-secondary
      text-sm
      text-black
    ">
        <Script
          defer
          src={process.env.NODE_ENV === "production" ? "https://plausible.io/js/script.js" : "https://plausible.io/js/script.exclusions.js"}
          data-domain="mierdajobs.com"
        />
        <body className={`
        ${GeistSans.className}
          flex
          min-h-full
          w-full
          flex-col
          `}>

          <div className="
            flex                     
            grow
            flex-col
            justify-start
            px-4 
            pb-8 
            md:px-6
          ">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
};

export default Layout;
