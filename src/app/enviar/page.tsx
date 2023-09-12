'use client';

import ReviewForm from "./ReviewForm";

import Heading from "@/components/Heading";
import { Select, SelectOption } from "@/components/Select";

const Page: React.FC = () => (
  <div className="flex grow flex-col gap-16">
    <Heading level={1}
      size="large">Enviar reseña</Heading>
    <ReviewForm />
  </div>
);

export default Page;
