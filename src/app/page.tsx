"use client";

import Image from "next/image";

import { FormSearch } from "../components/form-search";

import { Heading } from "@/components/heading";

const Page = () =>
  <>
    <header className="h-16 w-full">
      {/* ACCOUNT INFORMATION */}
    </header>
    <main className="flex flex-col items-center px-8 pt-[10vh]">
      <Image
        className="mb-10 w-52 md:w-60"
        src="/logo.png"
        width="250"
        quality={100}
        height="0"
        alt="MierdaJobs"
      />
      <FormSearch />
      <Heading
        className="my-16 text-center text-white"
        level={2}
        size="xl"
      >
        Descubre y denuncia condiciones laborales <span className="line-through">precarias</span> ilegales en una plataforma anónima.
      </Heading>
    </main>
  </>

export default Page;
