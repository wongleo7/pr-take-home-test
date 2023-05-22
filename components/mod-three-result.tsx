import { ModThreeStates } from '@/types/mod-three';

type ResultProps = {
  result: { remainder: ModThreeStates, binaryNumber: string };
};

export default function ModThreeResult({ result }: ResultProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <h3>Result: {`${result.binaryNumber} mod 11 = ${result.remainder}`}</h3>
    </div>
  );
}
