import Image from "next/image";
import React from "react";

import { Review } from "./data/types";

import LikeButton from "@/components/like-button";
import Paper from "@/components/paper";
import ValueBlock from "@/components/value-block";

interface Props {
  data: Review;
}

const Review = ({ data }: Props) =>
  <Paper className="flex h-fit flex-col gap-6">
    <li className="flex flex-col md:flex-row md:gap-8">
      {/* Desktop avatar */}
      <Image
        src={data.avatar}
        quality={100}
        width={100}
        height={100}
        alt="Avatar"
        className="
            hidden 
            h-[100px]
            w-[100px] 
            shrink-0
            rounded-full 
            border-4 
            border-secondary 
            bg-secondary 
            md:flex"
      />

      <div className="flex grow flex-col gap-4">
        <div className="flex grow items-end gap-4 md:items-center">
          {/* Mobile avatar */}
          <Image
            src={data.avatar}
            quality={100}
            width={50}
            height={50}
            alt="Avatar"
            className="
              h-[50px]
              w-[50px]
              shrink-0
              rounded-full 
              border-[3px] 
              border-secondary 
              bg-secondary 
              md:hidden"
          />

          <div className="flex w-full flex-col md:flex-row-reverse md:justify-between">
            <LikeButton
              totalLikes={0}
              liked={false}
            />
            <div className="mb-2 flex flex-col justify-center md:mb-0">
              <p className="font-bold">{data.contract_fraud}</p>
              <p className="text-sm text-gray">{data.created_at}</p>
            </div>
          </div>
        </div>

        <p className="mb-2 break-all">{data.comment}</p>

        <div className="flex grow gap-3 text-sm">
          <ValueBlock
            className="w-1/3"
            title="Jornada" value={`${data.working_hours_pw} h/semana`} />
          <ValueBlock
            className="w-1/3"
            title="Vacaciones" value={`${data.annual_leave} dias/año`} />
          <ValueBlock
            className="w-1/3"
            title="Salario" value={`${data.salary_ph} €/hora`} />
        </div>
      </div>
    </li>
  </Paper>

export default Review;