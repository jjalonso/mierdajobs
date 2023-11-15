
"use client";

import React, { useState, useTransition } from "react";

import { deleteMyReview } from "./data/actions";
import { MyReview } from "./data/types";
import Item from "./item";

import { Button } from "@/components/button";
import Dialog from "@/components/dialog";

interface Props {
  items: MyReview[]
}

const Listing = ({ items }: Props) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    setIdToDelete(id);
    setIsConfirmationOpen(true);
  }

  const handleConfirmDelete = async () => {
    startTransition(async () => {
      await deleteMyReview(idToDelete)
      setIsConfirmationOpen(false);
      setIdToDelete("");
    })
  }

  return (
    <>
      <Dialog
        onClose={() => setIsConfirmationOpen(false)}
        isOpen={isConfirmationOpen} title="Confirmación">
        <p>
          ¿Estás seguro que quieres eliminar esta reseña?
        </p>
        <Button
          loading={isPending}
          onClick={() => handleConfirmDelete()}
          className="mt-6 w-full md:w-fit" variant="primary">
          Eliminar
        </Button>
      </Dialog>
      <ul className="flex flex-col gap-5">
        {items.map(item =>
          <li key={item._id}>
            <Item
              data={item}
              onDelete={() => handleDelete(item._id)}
            />
          </li>
        )}
      </ul>
    </>
  );
};

export default Listing;
