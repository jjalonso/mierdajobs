import Image from "next/image";

import Header from "@/components/header";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";

const Page = () => {
  return (
    <div className="flex grow flex-col items-center">
      <Header noAuth
      />

      <Paper className="mt-10 flex h-56 flex-col items-center justify-center gap-8 rounded-b-none bg-secondary md:mt-20 md:max-w-lg">
        <Image
          className=""
          src="/objects/envelope.png"
          width="150"
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
