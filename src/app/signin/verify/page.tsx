import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import authOptions from "@/app/api/auth/_options/options";
import Header from "@/components/header";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <div className="flex grow flex-col items-center">
      <Header noAuth />

      <Paper className="mt-12 flex h-56 flex-col items-center justify-center gap-8 rounded-b-none bg-secondary md:mt-20 md:max-w-lg">
        <Image
          className="relative bottom-10"
          src="/objects/paper-plane.png"
          width="300"
          quality={100}
          height="0"
          alt="MierdaJobs"
        />
      </Paper>

      <Paper className="flex flex-col gap-8 rounded-t-none text-center md:max-w-lg">
        <Heading
          level={1}
          size="xl"
        >
          Invitación enviada
        </Heading>
        <p>Te hemos enviado un email ¡compruébalo!</p>
      </Paper>

    </div>
  );
};

export default Page;
export const metadata: Metadata = {
  title: "Invitación enviada",
}
