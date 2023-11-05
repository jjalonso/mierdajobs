"use client";

import React from "react";

import { contractFraudValues } from "../reviews/values";

import { UseReviewForm } from "./hooks/use-review-form";
import { workingHoursPeriodValues } from "./values"

import { WorkingHoursPeriodEnum } from "@/app/api/_reviews/types";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import Paper from "@/components/paper";
import { RadioGroup, RadioGroupOption } from "@/components/radio-button";
import { Select, SelectOption } from "@/components/select";
import { TextArea } from "@/components/textarea";

interface Props {
  gplace: string
}

const ReviewForm = ({ gplace }: Props) => {
  const {
    onFormSubmit,
    errors
  } = UseReviewForm();

  return (

    // <Thanks gplace={gplace} /> :
    <Paper className="flex h-fit flex-col gap-6">
      {JSON.stringify(errors)}
      <form
        className="flex flex-col gap-6"
        action={onFormSubmit}
        autoComplete="off"
        noValidate
      >
        <input
          hidden name="gplace_id" value={gplace} />
        <Heading
          className="mb-6"
          size="xl"
          level={1}
        >
          Añadir una reseña
        </Heading>

        <div className="flex w-full gap-6">
          <div className="w-1/2 md:w-1/4">

            {/* Working Hours */}
            <Input
              name="working_hours"
              inputMode="numeric"
            />
          </div>
          <div className="w-1/2 md:w-1/4">

            {/* Working Hours Period */}
            <Select
              name="working_hours_period"
              defaultValue={WorkingHoursPeriodEnum.PER_WEEK}
            >
              {workingHoursPeriodValues.map(period =>
                <SelectOption
                  key={period.id}
                  value={period}>
                  {period.name}
                </SelectOption>
              )}
            </Select>

          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/4">

            {/* Annual Leave */}
            <label>
              Vacaciones anuales
              <Input
                name="annual_leave"
                inputMode="numeric"
                suffix="Dias"
              />
            </label>
          </div>
          <div className="w-full md:w-1/4">

            {/* Monthly Salary */}

            <label>
              Salario mensual
              <Input
                name="monthly_salary"
                suffix="EUR"
                inputMode="numeric"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          {/* Checkbox */}

          <label>
            Contrato
            <RadioGroup name="contract_fraud">
              {Object.entries(contractFraudValues).map(([key, { title, description }]) =>
                <RadioGroupOption
                  key={key}
                  value={key}
                >
                  <div className="flex flex-col gap-3">
                    <p>{title}</p>
                    <p className="text-sm text-gray ui-checked:text-white">{description}</p>
                  </div>
                </RadioGroupOption>
              )}
            </RadioGroup>
          </label>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="w-full">

            {/* Comment */}

            <label>
              Cuenta tu experiencia
              <TextArea
                name="comment"
                placeholder="Cuéntanos como fue trabajar aquí"
              />
              {/* <CharCounter
                  className="absolute bottom-0 right-0"
                  current={field.value.length}
                  max={250}
                /> */}
            </label>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="w-full">

            {/* Comment */}

            <Checkbox
              className="text-sm" name="legal">Acepto y entiendo los <a
                className="text-secondary underline"
                target="_blank" href="/condiciones_mierdajobs.pdf" rel="noopener noreferrer">terminos y condiciones</a>.
            </Checkbox>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-end">
          {/* {isServerError && <ErrorMessage className="self-center text-center">Ha habido un error, intelelo de nuevo</ErrorMessage>} */}
          <Button
            // loading={isSubmitting}
            className="w-full md:w-fit"
            type="submit"
          >
            Enviar Reseña
          </Button>
        </div>

      </form>
    </Paper>
  )
};

export default ReviewForm;
