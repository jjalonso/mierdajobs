import ReviewForm from "./review-form";

import { getCounties } from "@/app/api/counties/actions";
import Heading from "@/components/heading";

const Page: React.FC = async () => {
  const counties = await getCounties();

  return (
    <>
      <div className='pb-20 flex flex-col gap-2'>
        <Heading level={1} size="xl">Enviar Reseña</Heading>
        <span className="text-gray-dark text-xl">Comparte con otros como fue tu experiencia.</span>
      </div>
      <ReviewForm counties={counties} />
    </>
  )
};

export default Page;
