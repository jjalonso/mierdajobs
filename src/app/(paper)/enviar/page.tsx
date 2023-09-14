import { headers } from 'next/headers';

import ReviewForm from "./ReviewForm";

import Heading from "@/components/Heading";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Page: React.FC = async () => {

  const headersList = headers();

  const domain = headersList.get('host') || "";
  const CountiesFetch = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/counties`);
  const counties = await CountiesFetch.json();

  return (
    <>
      <CardHeader className='pb-14'>
        <CardTitle>Enviar Reseña</CardTitle>
        <CardDescription>Comparte con otros como fue tu experiencia.</CardDescription>
      </CardHeader>
      <CardContent>
        <ReviewForm counties={counties} />
      </CardContent>
      {/* <CardFooter className="flex justify-between"> */}
      {/* <Button>Deploy</Button> */}
      {/* </CardFooter> */}
    </>
    // <div className="flex grow flex-col gap-16">
    //   <Heading level={1}
    //     size="large">Enviar reseña</Heading>
    // </div>
  )
};

export default Page;
