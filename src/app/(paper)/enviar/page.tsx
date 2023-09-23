
import BusinessForm from "./business-form";

import { getCounties } from "@/app/api/counties/actions";
import Heading from "@/components/heading";

const Page: React.FC = async () => {
  const counties = await getCounties();

  return (
    <>
      <div className='flex flex-col gap-2 pb-20'>
        <Heading level={1}
          size="xl">Enviar Reseña</Heading>
        <span className="text-xl text-gray-dark">Comparte con otros como fue tu experiencia.</span>
      </div>
      <BusinessForm counties={counties} />
    </>
  )
};

export default Page;
