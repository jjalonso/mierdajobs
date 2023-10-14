
import Thanks from "./thanks";

import ReviewForm from "./review-form";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Record<string, string>
}

const Page = ({ searchParams }: Props) => {
  const { id } = searchParams;
  if (!id) redirect("/buscador");

  return <ReviewForm id={id} />
}

const ReviewForm = ({
  form,
  onFormSubmit,
  searchParams
}: Props) => searchParams.sent ? <Thanks place={searchParams.sent} /> :
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-6"
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

        <div className="relative flex w-full flex-col md:w-3/4">

          {/* Business */}

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
                ...MAX_LENGTH_RULE(250)
              }}>
              {({ ref: _ref, ...field }) => <TextArea {...field} />}
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

export default composeHooks(() => ({
  useReviewForm: () => UseReviewForm()
}))(ReviewForm);