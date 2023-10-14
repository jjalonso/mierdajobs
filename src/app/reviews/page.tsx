import { Heading } from '@/components/heading';
import { Paper } from '@/components/paper';
import { redirect } from 'next/navigation';
import React from 'react';

interface Props {
  searchParams: Record<string, string>
}

const Reviews = ({ searchParams }: Props) => {
  const { id } = searchParams;
  if (!id) redirect("/buscador");

  // TODO: Get reviews from API

  return (
    <Paper className="mb-10 flex flex-col gap-6 h-fit">
      <Heading level={2} size="xl">
        Reviews
      </Heading>
    </Paper>
  );
};

export default Reviews;
