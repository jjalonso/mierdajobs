
import { redirect } from "next/navigation";

import ReviewForm from "./review-form";

interface Props {
  searchParams: Record<string, string>
}

const Page = ({ searchParams }: Props) => {
  const { id } = searchParams;
  if (!id) redirect("/");

  return (

    <div className="flex w-full flex-col">
      <ReviewForm id={id} />
    </div>
  )
}

export default Page;