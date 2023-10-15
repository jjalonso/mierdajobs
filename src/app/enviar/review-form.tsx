"use client";

import { RadioGroup } from "@headlessui/react";
import React from "react";
import { FormProvider } from "react-hook-form";

import { contractFraudObject } from "../reviews/values";

import { UseReviewForm } from "./hooks/use-review-form";
import Thanks from "./thanks";
import { workingHoursPeriodValues, MIN_NUMBER_RULE, MAX_NUMBER_RULE, REQUIRED_RULE, MAX_LENGTH_RULE } from "./values"

import { Button } from "@/components/button";
import { FormField } from "@/components/formfield";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import Paper from "@/components/paper";
import { Radio } from "@/components/radio";
import { Select, SelectOption } from "@/components/select";
import { TextArea } from "@/components/textarea";

interface Props {
  id: string // TODO: Must be Business
}

const ReviewForm = ({ id }: Props) => {
  const {
    form,
    onFormSubmit,
  } = UseReviewForm(id);

  return form.formState.isSubmitSuccessful ?
    <Thanks /> :
    <Paper className="mb-10 flex h-fit flex-col gap-6">

      <FormProvider {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={onFormSubmit}
          autoComplete="off"
          noValidate
        >
          <Heading
            className="my-6"
            size="xl"
            level={1}
          >
            Enviar Reseña
          </Heading>

          <div className="flex w-full gap-6">
            <div className="w-1/2 md:w-1/4">

              {/* Working Hours */}

              <FormField
                name="workingHours"
                label="Horas de trabajo"
                rules={{
                  ...REQUIRED_RULE,
                  ...MIN_NUMBER_RULE(1)
                }}>
                {({ ref: _ref, ...field }) =>
                  <Input
                    {...field}
                    type="number" />}
              </FormField>
            </div>
            <div className="w-1/2 md:w-1/4">

              {/* Working Hours Period */}

              <FormField
                className="mt-6 md:mt-5"
                name="workingHoursPeriod"
              >
                {({ ref: _ref, ...field }) =>
                  <Select {...field}>
                    {workingHoursPeriodValues.map(period =>
                      <SelectOption
                        key={period.id}
                        value={period}>
                        {period.name}
                      </SelectOption>
                    )}
                  </Select>
                }
              </FormField>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 md:flex-row">
            <div className="w-full md:w-1/4">

              {/* Annual Leave */}

              <FormField
                name="annualLeave"
                label="Vacaciones anuales"
                rules={{
                  ...REQUIRED_RULE,
                  ...MIN_NUMBER_RULE(0),
                  ...MAX_NUMBER_RULE(365)
                }}>
                {({ ref: _ref, ...field }) =>
                  <Input
                    {...field}
                    type="number"
                  />}
              </FormField>
            </div>
            <div className="w-full md:w-1/4">

              {/* Monthly Salary */}

              <FormField
                name="monthlySalary"
                label="Salario mensual"
                rules={{
                  ...REQUIRED_RULE,
                  ...MIN_NUMBER_RULE(1)
                }}>
                {({ ref: _ref, ...field }) =>
                  <Input
                    {...field}
                    type="number"
                  />}
              </FormField>
            </div>
          </div>

          <div className="flex flex-col gap-4">

            {/* Checkbox */}

            <FormField
              name="contractFraud"
              className="flex flex-col"
              label="Contrato"
              rules={{
                ...REQUIRED_RULE
              }}>
              {({ ref: _ref, ...field }) =>
                <RadioGroup>
                  {Object.entries(contractFraudObject).map(([key, value]) =>
                    <Radio
                      {...field}
                      key={key}
                      label={value}
                      value={key}
                    />
                  )}
                </RadioGroup>
              }
            </FormField>
          </div>

          <div className="flex w-full flex-col gap-6 md:flex-row">
            <div className="w-full">

              {/* Comment */}

              <FormField
                name="comment"
                label=""
                rules={{
                  ...REQUIRED_RULE,
                  ...MAX_LENGTH_RULE(250)
                }}>
                {({ ref: _ref, ...field }) =>
                  <TextArea
                    placeholder="Cuéntanos como fue trabajar aquí"
                    {...field} />}
              </FormField>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <Button
              loading={form.formState.isSubmitting}
              className="w-full md:w-fit"
              type="submit"
            >
              Continuar
            </Button>
          </div>

        </form>
      </FormProvider >
    </Paper>
};

export default ReviewForm;
