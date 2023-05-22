"use client";
import { ModThreeStates } from "@/utils/mod-three";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./button";
import Input from "./input";
import Result from "./result";

type ModuloThreeFormProps = {
  binaryNumber: string;
  result: ModThreeStates | undefined;
  isError: string | undefined;
  onChangeBinaryInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeDecimalInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function ModuloThreeForm({
  binaryNumber,
  result,
  isError,
  onChangeBinaryInput,
  onChangeDecimalInput,
  onSubmit,
}: ModuloThreeFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <Input
        value={binaryNumber}
        label="Base 10 Number"
        isError={isError}
        onChange={onChangeBinaryInput}
      />
      <Input
        value={binaryNumber}
        label="Binary Number"
        isError={isError}
        onChange={onChangeDecimalInput}
      />
      <Button label="Calculate" />
      {result && <Result result={result.toString()} />}
    </form>
  );
}
