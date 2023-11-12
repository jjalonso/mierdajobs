"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useCallback } from "react";
import Typewriting from "react-typewriting";
import { twMerge } from "tailwind-merge";

import { BusinessTypingText } from "../app/values";
import { useSearchField } from "../hooks/use-search-field";

import { Input } from "@/components/input";

interface Props {
  query?: string
  className?: string
}

const FormSearch = ({ className, query = "" }: Props) => {
  const searchField = useSearchField();

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    // Prevent form submission if the input is empty
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get("q")?.toString().trim();
    if (!inputValue) {
      event.preventDefault();
    }
  }, []);

  return (
    <form
      action="/search"
      method="get"
      onSubmit={handleSubmit}
      className={twMerge("flex w-full self-center md:max-w-lg", className)}>
      <Typewriting
        waitBeforeDeleteMs={800}
        deleteSpeedMs={0}
        strings={BusinessTypingText}
      >
        {({ currentText }) => (
          <Input
            name="q"
            defaultValue={query}
            onFocus={searchField.onFocus}
            placeholder={searchField.isTouched ? "" : currentText}
            icon={<MagnifyingGlassIcon className="text-secondary" />}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            enterKeyHint="search"
            className="focus:border-none focus:ring-0"
          />
        )}
      </Typewriting>
    </form>
  )
};

export { FormSearch }
