import { modThree, modThreeWithHistory } from "./mod-three";

describe("Regular modThree", () => {
  it("base case", async () => {
    expect(await modThree("")).to.eq(0);
  });
  it("0", async () => {
    expect(await modThree("0")).to.eq(0);
  });
  it("pdf example 1", async () => {
    expect(await modThree("1101")).to.eq(1);
  });
  it("pdf example 2", async () => {
    expect(await modThree("1110")).to.eq(2);
  });
  it("pdf example 3", async () => {
    expect(await modThree("1111")).to.eq(0);
  });
  it("long binary string", async () => {
    expect(await modThree("11111111111111111111111")).to.eq(1);
  });
});

describe("modThree with History", () => {
  it("base case", async () => {
    expect(await modThreeWithHistory("")).to.deep.eq({
      finalState: 0,
      history: [],
    });
  });

  it("0", async () => {
    expect(await modThreeWithHistory("0")).to.deep.eq({
      finalState: 0,
      history: [{ state: 0, input: 0 }],
    });
  });

  it("standard mod three result", async () => {
    expect(await modThreeWithHistory("1010")).to.deep.eq({
      finalState: 1,
      history: [
        { state: 1, input: 1 },
        { state: 2, input: 0 },
        { state: 2, input: 1 },
        { state: 1, input: 0 },
      ],
    });
  });
});
