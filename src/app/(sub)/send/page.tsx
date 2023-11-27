
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import SendForm from "./send-form";

import authOptions from "@/app/(auth)/api/auth/_options/options";
import { hasUserSubmittedReview } from "@/lib/mongodb/checks";

interface Props {
  searchParams: {
    id: string
  }
}

const Page = async ({ searchParams }: Props) => {
  const session = await getServerSession(authOptions);
  const { id } = searchParams;

  if (!id) redirect("/");
  if (!session) redirect(`/signin?callbackUrl=/send?id=${id}`);
  const hasUserSubmitted = await hasUserSubmittedReview(session.user.id, id);
  if (hasUserSubmitted) redirect("/")

  return (
    <div className="flex flex-col items-center">
      <SendForm gplace={id} />
    </div>
  )
}

export default Page;

export const metadata: Metadata = {
  title: "Añadir una reseña",
}