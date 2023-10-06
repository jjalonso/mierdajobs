import { disconnectDB } from "@/app/_server/db/mongodb";
import { handleErrors, handleSuccess } from "../utils";
import { getCounties } from "./actions";

export const GET = async () => {
  try {
    const response = await getCounties();
    return handleSuccess("Ciudades recuperadas correctamente", 200, response);
  } catch (error) {
    await disconnectDB();
    return handleErrors(
      "Hubo un problema al recuperar la provincia",
      500,
      error
    );
  }
};
