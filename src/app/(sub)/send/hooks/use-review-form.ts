
import { useCallback, useState } from "react";

import { sendReview } from "@/app/api/_reviews/send-review/actions";
import { HTTPValidationError, HTTPValidationErrorData } from "@/lib/errors";

interface UseReviewFormReturn {
  onFormSubmit: (formData: FormData) => void;
  errors: any;
}

// try {
//   const values = _.assign(Object.fromEntries(formData));

//   await schemaReviews.validateAsync(values, { abortEarly: false });
//   // TODO: XSS

//   await insertDataInCollection("reviews", values);

// } catch (e: unknown) {
//   console.error(e)

//   if (e instanceof ValidationError) {
//     const errorsObject = e.details.reduce((acc: HTTPValidationErrorData, { message, path }) => {
//       const fieldName = path.join(".");
//       acc[fieldName] = acc[fieldName] || [];
//       acc[fieldName].push(message);
//       return acc;
//     }, {});
//     console.log(errorsObject)
//     throw new HTTPValidationError(errorsObject);
//   }
// } finally {
//   await disconnectDB();
// }

const UseReviewForm = (): UseReviewFormReturn => {
  const [errors, setErrors] = useState<HTTPValidationErrorData>({});

  const onFormSubmit = useCallback(async (formData: FormData) => {
    console.log("called!")

    try {
      await sendReview(formData)

      //   sendReview(values)
    }
    catch (e: unknown) {
      // console.error(e);
      // console.log(e.data)
      console.log("err")
      if (e instanceof HTTPValidationError) {
        console.log("invalid")
        setErrors(e.data)
      }
    }
  }, []);

  return {
    onFormSubmit,
    errors
  };
};

export { UseReviewForm };
export type { UseReviewFormReturn };
