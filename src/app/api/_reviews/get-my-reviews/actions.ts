import { GetMyReviewsResponse } from "./types"

const getMyReviews = (): GetMyReviewsResponse => {
  return {
    totalReviews: 2,
    reviews: [
      {
        id: "1",
        name: "Bar La Ponderosa",
        working_hours_pw: 50,
        contract_fraud: "No hay contrato",
        likes: 0,
        created_at: "Octubre 2021",
        "monthly_salary": 700,
        "annual_leave": 3,
        "comment": "Muy mal ambiente de trabajo, todo es muy toxico"
      },
      {
        id: "2",
        name: "Modas Mariquilla",
        working_hours_pw: 56,
        likes: 22,
        contract_fraud: "No hay contrato",
        created_at: "Octubre 2020",
        "monthly_salary": 500,
        "annual_leave": 7,
        "comment": "El dueño no te permite ponerte malo, no se fia ni de cuando le llevas el parte medico, que no tengo porque llevarlo porque no tengo ni contrato..."
      }
    ],
  }
}

export default getMyReviews;