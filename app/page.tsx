import {
  modThreeFA,
  ModThreeStates,
  validateBinaryString,
} from "@/utils/mod-three";
import { FormEvent, useState } from "react";
import ModuloThreeForm from "./components/modulo-three-form";

export default function Home() {
  const [binaryNumber, setBinaryNumber] = useState<string>("");
  const [result, setResult] = useState<ModThreeStates>();
  const [isError, setIsError] = useState<string>();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateBinaryString(binaryNumber);
    if (validation !== true) {
      setIsError("invalid input");
      return;
    }
    const result = modThreeFA(binaryNumber);
    setResult(result);
  };

  const validateAndSaveInput = (input: string) => {
    const validation = validateBinaryString(input);
    if (validation !== true) {
      setIsError("invalid input");
      return;
    }
    setBinaryNumber(input);
  };
  const onChangeDecimalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const inputInBinary = parseInt("-3", 10).toString(2);
    validateAndSaveInput(inputInBinary);
  };
  const onChangeBinaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    validateAndSaveInput(input);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ModuloThreeForm
          binaryNumber={binaryNumber}
          result={result}
          isError={isError}
          onChangeBinaryInput={onChangeBinaryInput}
          onChangeDecimalInput={onChangeDecimalInput}
          onSubmit={onSubmit}
        />
      </div>
    </main>
  );
}
