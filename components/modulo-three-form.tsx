'use client';
import { FormEvent, useState } from "react";
import Input from "./input";
import SubmitButton from './submit-button';
import type { ModThreeAlphabet, ModThreeStates } from '@/types/mod-three';
import type { StateHistory } from '@/types/state-history';
import validateBinaryString from '@/utils/validate-binary-string';
import { modThreeFA } from '@/server-utils/mod-three';
import ModThreeResult from './mod-three-result';

export default function ModuloThreeForm() {
  const [binaryNumber, setBinaryNumber] = useState<string>("");
  const [result, setResult] = useState<{
    remainder: ModThreeStates,
    binaryNumber: string,
    history: StateHistory<ModThreeStates, ModThreeAlphabet>
  }>();
  const [isError, setIsError] = useState<string>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validation = validateBinaryString(binaryNumber);
    if (validation !== true) {
      setIsError(`invalid input:${binaryNumber}:${validation}`);
      return;
    }
    const { finalState, history } = await modThreeFA(binaryNumber);
    setResult({
      binaryNumber,
      remainder: finalState,
      history
    });
  };

  const validateAndSaveInput = (input: string) => {
    const validation = validateBinaryString(input);
    if (validation !== true) {
      setIsError(`invalid input:${input}:${validation}`);
      return;
    } else {
      setIsError(undefined);
    }
    setBinaryNumber(input);
  };

  const onChangeDecimalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const inputInBinary = parseInt(input, 10).toString(2);
    validateAndSaveInput(inputInBinary);
  };
  const onChangeBinaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    validateAndSaveInput(input);
  };
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          value={parseInt(binaryNumber, 2).toString()}
          label="Base 10 Number"
          isError={isError}
          onChange={onChangeDecimalInput}
        />
        <Input
          value={binaryNumber}
          label="Binary Number"
          isError={isError}
          onChange={onChangeBinaryInput}
        />
        <SubmitButton label="Calculate" />
      </form>
      {result != null && <ModThreeResult result={result} />}
    </>
  );
}
