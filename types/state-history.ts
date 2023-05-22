export type StateHistory<S, A> = {
  state: S;
  input: A;
}[];