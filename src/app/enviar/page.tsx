
import { redirect } from "next/navigation";

import ReviewForm from "./review-form";

interface Props {
  searchParams: Record<string, string>
}

const Page = ({ searchParams }: Props) => {
  const { id } = searchParams;
  if (!id) redirect("/buscador");

  return <ReviewForm id={id} />
}

export default Page;