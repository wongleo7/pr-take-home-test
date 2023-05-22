type FiniteAutomationProps<S, A> = {
  // setOfStates: S[];
  inputAlphabet: A[];
  initialState: S;
  // finalStates: S[];
  transitionFunction: (state: S, alphabet: A) => S;
};

function finiteAutomation<S, A>({
  inputAlphabet,
  initialState,
  transitionFunction,
}: FiniteAutomationProps<S, A>): S {
  let currentState = initialState;
  for (let i = 0; i < inputAlphabet.length; i++) {
    currentState = transitionFunction(currentState, inputAlphabet[i]);
  }
  return currentState;
}

export default finiteAutomation;
