import { Metadata } from "next";
import Image from "next/image";

import { FormSearch } from "../components/form-search";
import Header from "../components/header";

import { Heading } from "@/components/heading";

const Page = () => {
  return (
    <>
      <Header noLogo
      />
      <main className="flex flex-col items-center px-8 pt-[10vh]">
        <Image
          className="mb-10 w-60"
          src="/logo.png"
          width="250"
          quality={100}
          height="0"
          alt="MierdaJobs"
        />
        <FormSearch />
        <Heading
          className="mt-16 text-center text-white"
          level={1}
          size="xl"
        >

          Busca y publica reseñas de negocios con condiciones laborales <span className="line-through">precarias</span> ilegales en una plataforma anonima.
        </Heading>
      </main>
    </>
  )
}

export default Page;
export const metadata: Metadata = {
  title: "MierdaJobs",
  alternates: {
    canonical: "/",
  }
}
