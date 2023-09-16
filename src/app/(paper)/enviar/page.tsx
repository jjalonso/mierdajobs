import ReviewForm from "./ReviewForm";

import Heading from "@/components/heading";

const Page: React.FC = async () => {
  const countiesResponse = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/counties`);
  const counties = await countiesResponse.json();

  return (
    <>
      <div className='pb-14'>
        {/* <Heading level={1} */}
        {/* size="medium">Enviar Reseña</Heading> */}
        <span>Comparte con otros como fue tu experiencia.</span>
      </div>
      <ReviewForm counties={counties} />

    </>
  )
};

export default Page;
