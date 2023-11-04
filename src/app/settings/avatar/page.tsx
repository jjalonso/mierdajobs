import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React from "react";

import AvatarForm from "./avatar-form";

import authOptions from "@/app/api/auth/_options/options";
import Header from "@/components/header";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

interface Props {
  searchParams: {
    callbackUrl: string;
  }
}

const Page = async ({ searchParams }: Props) => {
  const session = await getServerSession(authOptions);
  const callbackUrl = searchParams.callbackUrl;

  if (!callbackUrl) redirect("/");

  return (
    <div className="flex grow flex-col items-center">
      <Header noAuth />
      <Paper className="mt-12 flex flex-col gap-8 md:mt-20 md:max-w-lg">
        <Heading
          level={1}
          size="xl"
          className="text-center"
        >
          Escoge tu avatar
        </Heading>
        <AvatarForm
          initialValue={session?.user?.image || ""}
          callbackUrl={callbackUrl}
        />
      </Paper>
    </div>
  );
};

export default Page;
export const metadata: Metadata = {
  title: "Ajustes",
}
