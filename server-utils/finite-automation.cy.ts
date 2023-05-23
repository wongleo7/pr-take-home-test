import {
  finiteAutomation,
  finiteAutomationWithHistory,
} from "./finite-automation";

type S = 0 | 1 | 2;
type A = 0 | 1;

describe("<FiniteAutomation />", () => {
  it("static state with history", async () => {
    expect(
      await finiteAutomationWithHistory({
        inputAlphabet: [1, 0, 1],
        initialState: 0,
        transitionFunction: (state: S, alphabet: A) => {
          return state;
        },
      })
    ).to.deep.eq({
      finalState: 0,
      history: [
        { state: 0, input: 1 },
        { state: 0, input: 0 },
        { state: 0, input: 1 },
      ],
    });
  });

  it("static state", async () => {
    expect(
      await finiteAutomation({
        inputAlphabet: [1, 0, 1],
        initialState: 0,
        transitionFunction: (state: S, alphabet: A) => {
          return state;
        },
      })
    ).to.eq(0);
  });

  it("sum", async () => {
    expect(
      await finiteAutomation({
        inputAlphabet: [1, 2, 3],
        initialState: 0,
        transitionFunction: (state: number, alphabet: number) => {
          return state + alphabet;
        },
      })
    ).to.eq(6);
  });
});
