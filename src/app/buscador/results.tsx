
import _ from "lodash";

import { GoogleBusinesses } from "../api/get-google-businesses/types";

import { Paper } from "@/components/paper";
import Link from "next/link";

interface Props {
  data: GoogleBusinesses[]; // TODO: CHANGE TO PROPER TYPE
  query: string;
}

const Results = ({ data, query }: Props) =>
  <div className="w-full pb-10">
    <p className="p-2 text-sm md:text-base text-white">{data.length} negocios encontrados</p>

    <Paper className="divide-y divide-gray-light">
      {_.isEmpty(data) ?
        <div className="p-2 w-full text-center">No se encontraron resultados</div>
        :
        data.map((business) =>

          <Link href={`/reviews?id=${business.gplace_id}`}
            key={business.gplace_id}
            className="flex flex-col gap-1 overflow-hidden px-3 py-6 cursor-pointer md:hover:text-primary-dark"
          >
            <div className="truncate">{business.name}</div>
            <div className="truncate text-sm text-gray">
              {business.address.join(', ')}
            </div>
          </Link>
        )
      }
    </Paper >
  </div >

export { Results };
