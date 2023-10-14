import React from 'react';
import { ContractFraudEnum } from '../enviar/types';

// Temporary interfaces, to be moved
interface Review {
  created_at: string
  user?: string
  monthly_salary: number
  working_hours_pw: number
  salary_ph: number
  contract_fraud?: ContractFraudEnum
  annual_leave: number
  comment: string
}
// ------------------------------

interface Props {
  review: Review;
}

const ReviewItem = ({ review }: Props) => {
  return (
    <div>TODO</div>
  );
};

export default ReviewItem;
