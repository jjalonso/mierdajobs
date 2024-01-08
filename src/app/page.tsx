import { Metadata } from "next";
import Image from "next/image";

import { FormSearch } from "@/components/form-search";
import Header from "@/components/header";
import { Heading } from "@/components/heading";

const Page = () =>
  <>
    <Header noLogo />
    <main className="flex flex-col items-center px-8 pt-[10vh]">
      <Image
        priority
        className="mb-10 w-60"
        src="/logo.png"
        width={250}
        quality={100}
        height={58.8}
        alt="MierdaJobs"
      />
      <FormSearch />
      <Heading
        className="mt-16 text-center text-white"
        level={1}
        size="xl"
      >
        Comparte experiencias laborales precarias de forma anónima y lee reseñas de otros trabajadores.
      </Heading>
    </main>
  </>

export default Page;
export const metadata: Metadata = {
  title: "MierdaJobs",
  alternates: {
    canonical: "/",
  }
}
