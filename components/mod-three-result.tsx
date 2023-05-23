import type { ModThreeAlphabet, ModThreeStates } from '@/types/mod-three';
import type { StateHistory } from '@/types/state-history';

type ResultProps = {
  result: {
    remainder: ModThreeStates, binaryNumber: string,
    history: StateHistory<ModThreeStates, ModThreeAlphabet>
  };
};

export default function ModThreeResult({ result }: ResultProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <h3>Result: {`${result.binaryNumber} mod 11 = (decimal) ${result.remainder}`}</h3>
    </div>
  );
}
