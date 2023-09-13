// import { headers } from 'next/headers';

import ReviewForm from "./ReviewForm";

// import Heading from "@/components/Heading";

const Page: React.FC = () => {

  // const headersList = headers();
  // const domain = headersList.get('host') || "";
  // const counties = await fetch(`${domain}/api/counties`);
  // const test = await counties.json();

  return (
    <div className="flex grow flex-col gap-16">
      {/* <Heading level={1}
        size="large">Enviar reseña</Heading> */}
      {/* {test} */}
      {/* <ReviewForm /> */}

    </div>
  )
};

export default Page;
