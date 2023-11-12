import _ from "lodash";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

import { getGooglebusinesses } from "@/app/(sub)/search/api/get-google-businesses/actions";
import { FormSearch } from "@/components/form-search";
import Paper from "@/components/paper";

interface Props {
  searchParams: {
    q: string
  }
}

const Page = async ({ searchParams }: Props) => {
  const { q } = searchParams;
  if (!q) redirect("/");

  throw Error("ERROR TEST");

  const results = await getGooglebusinesses(q);
  return (
    <div className="flex w-full flex-col">
      <FormSearch
        query={q}
        className="mb-8"
      />

      <p className="my-2 text-white">
        {results.length} {results.length === 1 ? "negocio encontrado" : "negocios encontrados"}
      </p>
      <Paper className="divide-y divide-gray-light">
        {_.isEmpty(results) ?
          <div className="w-full p-2 text-center">No se encontraron resultados</div>
          :
          results.map((business) => {
            return <Link
              href={{
                pathname: "/reviews",
                query: {
                  id: business.place_id,
                  name: encodeURIComponent(business.name)
                }
              }}
              key={business.place_id}
              className="flex cursor-pointer flex-col gap-1 overflow-hidden px-3 py-6 md:hover:text-primary"
            >
              <div className="truncate">{business.name}</div>
              <div className="truncate text-sm text-gray">
                {business.address.join(", ")}
              </div>
            </Link>
          }
          )
        }
      </Paper >
    </div>
  );
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = searchParams;

  return {
    title: `Resultados para "${q}"`,
    alternates: {
      canonical: `/search?q=${q}`,
    }
  }
}

export default Page;