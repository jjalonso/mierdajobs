"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Typewriting from "react-typewriting";
import { twMerge } from "tailwind-merge";

import { useSearchField } from "../app/hooks/use-search-field";
import { BusinessTypingText } from "../app/values";

import { Input } from "@/components/input";

interface Props {
  query?: string
  className?: string
}

const FormSearch = ({ className, query = "" }: Props) => {
  const searchField = useSearchField();

  return (
    <form
      action={"/search"} method="get" className={twMerge("flex w-full self-center md:max-w-lg", className)}>
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
            icon={<MagnifyingGlassIcon />}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            enterKeyHint="search"
          />
        )}
      </Typewriting>
    </form>
  )
};

export { FormSearch }
