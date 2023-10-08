"use client";

import { FormProvider } from "react-hook-form";
import composeHooks from "react-hooks-compose"

import { UseReviewForm, UseReviewFormReturn } from "./hooks/use-review-form";
import { ContractFraudEnum } from "./types";
import { workingHoursPeriodValues, MIN_NUMBER_RULE, MAX_NUMBER_RULE, REQUIRED_RULE } from "./values"

import { Autocomplete, AutocompleteOption } from "@/components/autocomplete";
import { Button } from "@/components/button";
import { FormField } from "@/components/formfield";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Radio, RadioGroup } from "@/components/radio";
import { Select, SelectOption } from "@/components/select";
import { TextArea } from "@/components/textarea";

interface Props extends UseReviewFormReturn { }

const ReviewForm = ({
  form,
  onFormSubmit,
  businessField
}: Props) =>
  <div className="flex max-w-screen-md grow flex-col">

    <FormProvider {...form}>
      <form
        className="flex flex-col gap-6 rounded-md bg-white px-8 py-10 shadow-md md:gap-8 md:p-14"
        onSubmit={onFormSubmit}
        autoComplete="off"
        noValidate
      >
        <Heading
          className="mb-12"
          level={1}
          size="xl"
        >
          Enviar Reseña
        </Heading>

        <div className="flex w-full flex-col md:w-[400px]">

          {/* Business */}

          <FormField
            name="business"
            label="Nombre del negocio"
            rules={{ ...REQUIRED_RULE }}
          >
            {({ ref: _ref, ...field }) =>
              <Autocomplete
                {...field}
                placeholder="Escriba para buscar..."
                isLoading={businessField.isLoading}
                onQueryChange={businessField.setQuery}
              >
                {businessField.data.map((business) =>
                  <AutocompleteOption
                    key={business.id}
                    value={business}
                    noCheckIcon
                  >
                    <div className="flex flex-col gap-1 overflow-hidden p-2">
                      <div className="truncate">{business.name}</div>
                      <div className="truncate text-sm text-gray">{business.address}</div>
                    </div>
                  </AutocompleteOption>
                )}
              </Autocomplete>
            }
          </FormField >
        </div>

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
              <RadioGroup>
                <Radio
                  {...field}
                  label="El contrato parece correcto"
                  value={ContractFraudEnum.NO_FRAUD}
                />
                <Radio
                  {...field}
                  label="Las horas de trabajo no coinciden"
                  value={ContractFraudEnum.HOURS_MISMATCH} />
                <Radio
                  {...field}
                  label="No hay contrato"
                  value={ContractFraudEnum.NO_CONTRACT} />
              </RadioGroup>
            }
          </FormField>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="w-full">

            {/* Comment */}

            <FormField
              name="comment"
              label="Tu experiencia"
              rules={{
                ...REQUIRED_RULE,
              }}>
              {({ ref: _ref, ...field }) => <TextArea {...field} />}
            </FormField>
          </div>
        </div>

        <div className="flex items-end justify-end">
          <Button
            className="w-full md:w-fit"
            type="submit"
          >
            Continuar
          </Button>
        </div>

      </form>
    </FormProvider>
  </div>

export default composeHooks(() => ({
  useReviewForm: () => UseReviewForm()
}))(ReviewForm);