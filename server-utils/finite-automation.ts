'use server';

import { StateHistory } from '@/types/state-history';

type FiniteAutomationProps<S, A> = {
  // setOfStates: S[];
  inputAlphabet: A[];
  initialState: S;
  // finalStates: S[];
  transitionFunction: (state: S, alphabet: A) => S;
};

async function finiteAutomation<S, A>({
  inputAlphabet,
  initialState,
  transitionFunction,
}: FiniteAutomationProps<S, A>): Promise<S> {
  let currentState = initialState;
  for (let i = 0; i < inputAlphabet.length; i++) {
    currentState = transitionFunction(currentState, inputAlphabet[i]);
  }
  return currentState;
}

async function finiteAutomationWithHistory<S, A>({
  inputAlphabet,
  initialState,
  transitionFunction,
}: FiniteAutomationProps<S, A>): Promise<{ finalState: S, history: StateHistory<S, A> }> {
  let currentState = initialState;
  let history: { state: S, input: A }[] = [{state: initialState, input: inputAlphabet[0]}];

  for (let i = 0; i < inputAlphabet.length; i++) {
    currentState = transitionFunction(currentState, inputAlphabet[i]);
    history.push({state: currentState, input: inputAlphabet[i]});
  }
  return {
    finalState: currentState,
    history: history
  };
}

export {finiteAutomation, finiteAutomationWithHistory};
