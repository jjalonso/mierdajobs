import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getServerSession } from "next-auth";

import "./globals.css";
import authOptions from "./api/auth/_options/options";
import SessionProvider from "./session-provider";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

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
      <body className={`
        ${poppins.className} 
        flex
        min-h-full
        w-full
        flex-col
        px-4
        pb-8
        md:px-6
      `}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default Layout;
