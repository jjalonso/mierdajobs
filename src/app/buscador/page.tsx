import { getGoogleBusiness } from "../api/get-google-businesses/actions";

import LandingElements from "./LandingElements";
import { Results } from "./results";
import { SearchField } from "./search-field";

interface Props {
  searchParams: Record<string, string>
}

const Page = async ({ searchParams }: Props) => {
  const { q } = searchParams;
  const results = await getGoogleBusiness(q);

  return (
    <div className="flex w-full flex-col items-center gap-10 md:gap-24 px-6">
      <form
        action={`/buscador`} method="get" className="flex w-full max-w-lg">
        <SearchField query={q} />
      </form>
      {q ?
        <Results
          data={results}
          query={q}
        /> :
        <LandingElements />}
    </div>
  )
}

export default Page;
