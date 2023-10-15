
import _ from "lodash";
import Link from "next/link";

import { GoogleBusinesses } from "../api/get-google-businesses/types";

import Paper from "@/components/paper";

interface Props {
  data: GoogleBusinesses[]; // TODO: CHANGE TO PROPER TYPE
  query: string;
}

const Results = ({ data }: Props) =>
  <div className="w-full pb-10">
    <p className="p-2 text-sm text-white md:text-base">{data.length} negocios encontrados</p>

    <Paper className="divide-y divide-gray-light">
      {_.isEmpty(data) ?
        <div className="w-full p-2 text-center">No se encontraron resultados</div>
        :
        data.map((business) =>

          <Link
            href={`/reviews?id=${business.gplace_id}`}
            key={business.gplace_id}
            className="flex cursor-pointer flex-col gap-1 overflow-hidden px-3 py-6 md:hover:text-primary-dark"
          >
            <div className="truncate">{business.name}</div>
            <div className="truncate text-sm text-gray">
              {business.address.join(", ")}
            </div>
          </Link>
        )
      }
    </Paper >
  </div >

export { Results };
