import type { ModThreeAlphabet, ModThreeStates } from "@/types/mod-three";
import type { StateHistory } from "@/types/state-history";
import React from "react";

type ResultProps = {
  result: {
    remainder: ModThreeStates;
    binaryNumber: string;
    history: StateHistory<ModThreeStates, ModThreeAlphabet>;
  };
};

export default function ModThreeResult({ result }: ResultProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <h3>
        <span>Result:</span>
        <span>{`${result.binaryNumber} mod 11 = (decimal) ${result.remainder}`}</span>
      </h3>
      {result.history && (
        <div className="flex flex-col items-center justify-center mt-3">
          <h3>History</h3>
          <div className="grid mt-3 grid-cols-3 w-[12rem]">
            <div className="table-cell font-bold border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
              Step
            </div>
            <div className="table-cell font-bold border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
              Input
            </div>
            <div className="table-cell font-bold border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
              State
            </div>
            {result.history.map((record, index) => (
              <React.Fragment key={index}>
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
                  {index}
                </div>
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-2 pl-8 text-slate-500 dark:text-slate-400">
                  {record.input}
                </div>
                <div className="table-cell border-b border-slate-100 dark:border-slate-700 p-2 pl-8 text-slate-500 dark:text-slate-400">
                  {record.state}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
