"use client"
import React from "react";

import { useSignInForm } from "./hooks/use-signin-form";

import { Button } from "@/components/button";
import ErrorMessage from "@/components/error-message";
import { Input } from "@/components/input";

interface Props {
  error: string
  callbackUrl?: string
}

const SignInForm = ({ error, callbackUrl }: Props) => {
  const { email, setEmail, handleSignIn, isLoading } = useSignInForm(callbackUrl);

  return (
    <>
      <div>
        <Input
          name="email"
          id="email"
          type="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Escribe tu email"
        />
        {error && <ErrorMessage>Algo a fallado, intentalo de nuevo.</ErrorMessage>}
      </div>
      <Button
        loading={isLoading}
        className="w-full"
        type="submit"
        onClick={handleSignIn}
      >
        Enviar invitacion
      </Button>
    </>
  );
};

export default SignInForm;
