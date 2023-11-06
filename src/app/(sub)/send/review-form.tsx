"use client";

import React from "react";

import { contractFraudValues } from "../reviews/values";

import { useReviewForm } from "./hooks/use-review-form";
import Thanks from "./thanks";
import { workingHoursPeriodValues } from "./values"

import { WorkingHoursPeriodEnum } from "@/app/api/_reviews/types";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import ErrorMessage from "@/components/error-message";
import { FormField } from "@/components/formfield";
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
    isFormSubmitting,
    isFormSubmitted,
    errors
  } = useReviewForm();

  return isFormSubmitted ?
    <Thanks gplace={gplace} /> :
    <Paper className="flex h-fit flex-col gap-6">
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col gap-2 md:gap-6"
        autoComplete="off"
        noValidate
      >
        <input
          hidden name="gplace_id"
          defaultValue={gplace}
        />
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
            <FormField
              label="Horas de trabajo" error={errors.working_hours}>

              <Input
                name="working_hours"
                inputMode="numeric"
              />
            </FormField>
          </div>
          <div className="mt-8 w-1/2 pt-1 md:w-1/4">

            {/* Working Hours Period */}

            <Select
              displayValue={(v) => {
                const item = workingHoursPeriodValues.find(item => item.id === v);
                return item ? item.name : "";
              }}
              name="working_hours_period"
              defaultValue={WorkingHoursPeriodEnum.PER_WEEK}
            >
              {workingHoursPeriodValues.map(period =>
                <SelectOption
                  key={period.id}
                  value={period.id}>
                  {period.name}
                </SelectOption>
              )}
            </Select>

          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/4">

            {/* Annual Leave */}
            <FormField error={errors.annual_leave}>
              Vacaciones anuales
              <Input
                name="annual_leave"
                inputMode="numeric"
                suffix="Dias"
              />
            </FormField>
          </div>
          <div className="w-full md:w-1/4">

            {/* Monthly Salary */}

            <FormField
              label="Salario mensual"
              error={errors.monthly_salary}
            >
              <Input
                name="monthly_salary"
                suffix="EUR"
                inputMode="numeric"
              />
            </FormField>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          {/* Checkbox */}

          <FormField
            label="Contrato"
            error={errors.contract_fraud}
          >
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
          </FormField>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="w-full">

            {/* Comment */}

            <FormField
              label="Cuenta tu experiencia"
              error={errors.comment}
            >
              <TextArea
                name="comment"
                placeholder="Cuéntanos como fue trabajar aquí"
              />
              {/* <CharCounter
                  className="absolute bottom-0 right-0"
                  current={field.value.length}
                  max={250}
                /> */}
            </FormField>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="w-full">

            {/* Comment */}
            <FormField
              error={errors.legal} className="w-fit">
              <Checkbox
                className="text-sm" name="legal">Acepto y entiendo los <a
                  className="text-secondary underline"
                  target="_blank" href="/condiciones_mierdajobs.pdf" rel="noopener noreferrer">terminos y condiciones</a>.
              </Checkbox>
            </FormField>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-end">
          {errors.global && <ErrorMessage className="self-center text-center">{errors.global}</ErrorMessage>}
          <Button
            loading={isFormSubmitting}
            className="w-full md:w-fit"
            type="submit"
          >
            Enviar Reseña
          </Button>
        </div>

      </form>
    </Paper>
};

export default ReviewForm;
