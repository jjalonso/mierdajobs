import ReviewForm from "./ReviewForm";

import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Page: React.FC = async () => {
  const countiesResponse = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/counties`);
  const counties = await countiesResponse.json();

  return (
    <>
      <CardHeader className='pb-14'>
        <CardTitle>Enviar Reseña</CardTitle>
        <CardDescription>Comparte con otros como fue tu experiencia.</CardDescription>
      </CardHeader>
      <CardContent>
        <ReviewForm counties={counties} />
        {JSON.stringify(counties)}
      </CardContent>
    </>
  )
};

export default Page;
