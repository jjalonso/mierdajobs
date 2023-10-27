import React, { useCallback } from "react";

import { AvatarPicker } from "@/components/avatar-picker";
import { Button } from "@/components/button";
import Header from "@/components/header";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/auth-options";
import AvatarForm from "./avatar-form";

interface Props {
  searchParams: Record<string, string>
}

const Page = async ({ searchParams }: Props) => {
  const session = await getServerSession(authOptions);
  const callbackUrl = searchParams.callbackUrl;

  if (!callbackUrl) redirect("/");


  return (
    <div className="flex grow flex-col items-center">
      <Header noAuth />
      <Paper className="mt-10 flex flex-col gap-8 md:mt-20 md:max-w-lg">
        <Heading
          level={1}
          size="xl"
          className="text-center"
        >
          Escoge tu avatar
        </Heading>
        <AvatarForm initialValue={session?.user?.image} callbackUrl={callbackUrl} />
      </Paper>
    </div>
  );
};

export default Page;
