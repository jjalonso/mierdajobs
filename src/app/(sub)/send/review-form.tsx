"use client";

import React from "react";
import { FormProvider } from "react-hook-form";

import { contractFraudValues } from "../reviews/values";

import { UseReviewForm } from "./hooks/use-review-form";
import Thanks from "./thanks";
import { workingHoursPeriodValues, MIN_NUMBER_RULE, MAX_NUMBER_RULE, REQUIRED_RULE, MIN_LENGTH_RULE, MAX_LENGTH_RULE } from "./values"

import BackButton from "@/components/back-button";
import { Button } from "@/components/button";
import CharCounter from "@/components/char-counter";
import { Checkbox } from "@/components/checkbox";
import { FormField } from "@/components/formfield";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import Paper from "@/components/paper";
import { RadioGroup, RadioGroupOption } from "@/components/radio-button";
import { Select, SelectOption } from "@/components/select";
import StyledLink from "@/components/styled-link";
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
    <>
      <BackButton
        variant="ghost"
        className="hidden min-w-fit md:flex">
        Volver
      </BackButton>
      <Paper className="flex h-fit flex-col gap-6">

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
                  className="mt-5"
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
                  <RadioGroup {...field}>
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
                }
              </FormField>
            </div>

            <div className="flex w-full flex-col gap-6 md:flex-row">
              <div className="w-full">

                {/* Comment */}

                <FormField
                  name="comment"
                  className="relative"
                  label="Cuenta tu experiencia"
                  rules={{
                    ...REQUIRED_RULE,
                    ...MIN_LENGTH_RULE(30),
                    ...MAX_LENGTH_RULE(250)
                  }}>
                  {({ ref: _ref, ...field }) =>
                    <>
                      <TextArea
                        placeholder="Cuéntanos como fue trabajar aquí"
                        {...field} />
                      <CharCounter
                        className="absolute bottom-0 right-0"
                        current={field.value.length}
                        max={250}
                      />
                    </>
                  }
                </FormField>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 md:flex-row">
              <div className="w-full">

                {/* Comment */}

                <FormField
                  name="legal"
                  className="text-sm"
                  label=""
                  rules={{ ...REQUIRED_RULE }}
                >
                  {
                    ({ ref: _ref, ...field }) => <Checkbox {...field}>Acepto los <StyledLink href="/terms">terminos y condiciones</StyledLink> del servicio</Checkbox>
                  }
                </FormField>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <Button
                loading={form.formState.isSubmitting}
                className="w-full md:w-fit"
                type="submit"
              >
                Enviar Reseña
              </Button>
            </div>

          </form>
        </FormProvider >
      </Paper >
    </>
};

export default ReviewForm;
