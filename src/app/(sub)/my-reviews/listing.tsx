
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
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        title="Confirmación">
        <p>
          ¿Estás seguro que quieres eliminar esta reseña?
        </p>
        <div className="mt-12 flex w-full flex-col justify-end gap-3 md:flex-row">
          <Button
            onClick={() => setIsConfirmationOpen(false)}
            className="w-full md:w-fit"
            variant="neutral"
          >
            Cancelar
          </Button>
          <Button
            loading={isPending}
            onClick={() => handleConfirmDelete()}
            className="w-full md:w-fit"
            variant="primary"
          >
            Eliminar
          </Button>
        </div>
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
