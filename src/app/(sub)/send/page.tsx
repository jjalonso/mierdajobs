
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import ReviewForm from "./review-form";

import authOptions from "@/app/api/auth/_options/options";

interface Props {
  searchParams: Record<string, string>
}

const Page = async ({ searchParams }: Props) => {
  const session = await getServerSession(authOptions);
  const { id } = searchParams;

  if (!id) redirect("/");
  if (!session) redirect(`/signin?callbackUrl=/send?id=${id}`);

  return (
    <div className="flex flex-col items-center">
      <ReviewForm gplace={id} />
    </div>
  )
}

export default Page;

export const metadata: Metadata = {
  title: "Añadir una reseña",
}