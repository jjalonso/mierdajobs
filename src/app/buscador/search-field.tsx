"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Typewriting from "react-typewriting";

import { BusinessTypingText } from "../values";

import { useSearchField } from "./hooks/use-search-field";

import { Input } from "@/components/input";

interface Props {
  query?: string
}

const SearchField = ({ query = "" }: Props) => {
  const searchField = useSearchField();

  return (
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
  )
};

export { SearchField }
