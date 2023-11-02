import _ from "lodash";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

import { getGoogleBusiness } from "@/app/api/get-google-businesses/actions";
import { FormSearch } from "@/components/form-search";
import Paper from "@/components/paper";

interface Props {
  searchParams: Record<string, string>;
}

const Page = async ({ searchParams }: Props) => {
  const { q } = searchParams;
  if (!q) redirect("/");

  const results = await getGoogleBusiness(q);

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
          results.map((business) =>
            <Link
              href={`/reviews?id=${business.gplace_id}`}
              key={business.gplace_id}
              className="flex cursor-pointer flex-col gap-1 overflow-hidden px-3 py-6 md:hover:text-primary"
            >
              <div className="truncate">{business.name}</div>
              <div className="truncate text-sm text-gray">
                {business.address.join(", ")}
              </div>
            </Link>
          )
        }
      </Paper >
    </div>
  );
};

export default Page;
