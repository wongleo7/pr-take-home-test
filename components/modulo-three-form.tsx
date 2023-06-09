"use client";
import { FormEvent, useState } from "react";
import NumberInput from "./number-input";
import SubmitButton from "./submit-button";
import type { ModThreeAlphabet, ModThreeStates } from "@/types/mod-three";
import type { StateHistory } from "@/types/state-history";
import validateBinaryString from "@/utils/validate-binary-string";
import { modThreeWithHistory } from "@/server-utils/mod-three";
import ModThreeResult from "./mod-three-result";

export default function ModuloThreeForm() {
  const [binaryNumber, setBinaryNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<{
    remainder: ModThreeStates;
    binaryNumber: string;
    history: StateHistory<ModThreeStates, ModThreeAlphabet>;
  }>();
  const [isError, setIsError] = useState<string>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const validation = validateBinaryString(binaryNumber);
      if (validation !== true) {
        setIsError(`invalid input:${binaryNumber}`);
        return;
      }
      const { finalState, history } = await modThreeWithHistory(binaryNumber);
      setResult({
        binaryNumber,
        remainder: finalState,
        history,
      });
    } finally {
      setLoading(false);
    }
  };

  const validateAndSaveInput = (input: string) => {
    const validation = validateBinaryString(input);
    if (validation !== true) {
      setIsError(`invalid input:${input}`);
      return;
    } else {
      setIsError(undefined);
    }
    setBinaryNumber(input || "");
  };

  const onChangeDecimalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const inputInBinary = input && parseInt(input, 10).toString(2);
    validateAndSaveInput(inputInBinary);
  };

  const onChangeBinaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    validateAndSaveInput(input);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <NumberInput
          name="decimal-input"
          value={parseInt(binaryNumber, 2).toString()}
          label="Base 10 Number"
          isError={isError}
          onChange={onChangeDecimalInput}
        />
        <NumberInput
          name="binary-input"
          value={binaryNumber}
          label="Binary Number"
          isError={isError}
          onChange={onChangeBinaryInput}
        />
        <SubmitButton label="Calculate" disabled={loading} />
      </form>
      {result != null && <ModThreeResult result={result} />}
    </>
  );
}
