import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React from "react";

import authOptions from "../api/auth/_options/options";

import SignInForm from "./signin-form";

import Header from "@/components/header";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

interface Props {
  searchParams: {
    callbackUrl: string;
    error: string;
  }
}

const Page = async ({ searchParams }: Props) => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <div className="flex flex-col items-center" >
      <Header noAuth />

      <Paper className="relative mt-12 h-56 rounded-b-none bg-secondary bg-center md:mt-20 md:max-w-lg">
        <Image
          className="absolute -bottom-20 right-10"
          src="/objects/mic.png"
          width="200"
          quality={100}
          height="0"
          alt="Microfono"
        />
      </Paper>
      <Paper className="flex flex-col gap-8 rounded-t-none md:max-w-lg">
        <Heading
          level={1} size="xl">
          Iniciar Sesión
        </Heading>
        <div>
          <p>Tu voz importa.</p>
          <p>Proteger tu identidad también.</p>
        </div>
        <p className="">Tu email <strong>nunca</strong> será publicado</p>
        <SignInForm
          callbackUrl={searchParams.callbackUrl}
          error={searchParams.error}
        />
      </Paper>
    </div>
  )
}

export default Page;
export const metadata: Metadata = {
  title: "Inicia sesion",
  alternates: {
    canonical: "/signin",
  }
}