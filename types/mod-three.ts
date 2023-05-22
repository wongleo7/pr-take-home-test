export type ModThreeStates = 0 | 1 | 2;
export type ModThreeAlphabet = 0 | 1;

export type ModThreeTransitionProps = {
  initialState: ModThreeStates;
  input: ModThreeAlphabet;
};