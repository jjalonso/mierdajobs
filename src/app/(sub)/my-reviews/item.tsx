"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

import { MyReview } from "@/app/(sub)/my-reviews/data/types";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import Paper from "@/components/paper";
import ValueBlock from "@/components/value-block";

interface Props {
  data: MyReview
  onDelete: () => void
}

const Item = ({ data, onDelete }: Props) => {

  const deleteButton = useMemo(() =>
    // <form action={deleteMyReview}>
    <>
      <input
        type="hidden"
        name="id"
        value={data._id}
      />
      <Button
        className="text-black"
        onClick={onDelete}
        variant="neutral"
      >
        <TrashIcon className="h-6 w-6" />
        Eliminar reseña
      </Button>
    </>
    // </form>
    , [data._id, onDelete])

  return (
    <Paper className="flex w-full flex-col gap-8">
      <div className="flex gap-3">
        <div className="grow">
          <Heading
            level={2}
            className="truncate"
          >
            {data.name}
          </Heading>
          <p className="mt-1 text-sm text-gray">Octubre 2022 / {data.likes} Me gusta</p>
        </div>

        <div className="hidden md:flex">
          {deleteButton}
        </div>
      </div>
      <div className="space-y-2">
        <p className="font-bold">{data.contract_fraud}</p>
        <p className="break-all">{data.comment}</p>
      </div>
      <div className="flex grow gap-3 text-sm">
        <ValueBlock
          className="w-1/3"
          title="Jornada" value={`${data.working_hours_pw} h/semana`} />
        <ValueBlock
          className="w-1/3"
          title="Vacaciones" value={`${data.annual_leave} dias/año`} />
        <ValueBlock
          className="w-1/3"
          title="Salario" value={`${data.monthly_salary} €/mes`} />
      </div>
      <div className="flex justify-end md:hidden">
        {deleteButton}
      </div>
    </Paper>
  )
}

export default Item;
