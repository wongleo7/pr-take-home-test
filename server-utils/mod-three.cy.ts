import { modThree, modThreeWithHistory } from "./mod-three";

async function catchExceptionAsync<T>(
  fn: () => T
): Promise<string | undefined> {
  try {
    await fn();
  } catch (e: unknown) {
    if (e instanceof Error) return e.message;
    return "unknown";
  }
  return undefined;
}
const unexpectedInputError = new Error("Unexpected input");

describe("Regular modThree", () => {
  it("base case", async () => {
    expect(await modThree("")).to.eq(0);
  });
  it("is 0 and results in 0", async () => {
    expect(await modThree("0")).to.eq(0);
  });
  it("results in 1", async () => {
    expect(await modThree("1101")).to.eq(1);
  });
  it("results in 2", async () => {
    expect(await modThree("1110")).to.eq(2);
  });
  it("results in 0", async () => {
    expect(await modThree("1111")).to.eq(0);
  });
  it("long binary string", async () => {
    expect(await modThree("11111111111111111111111")).to.eq(1);
  });
});

describe("Negative scenarios: modThree", () => {
  it("is invalid string: nonbinary", async () => {
    expect(await catchExceptionAsync(async () => await modThree("1234"))).to.eq(
      unexpectedInputError.message
    );
  });
  it("is invalid string: alpha", async () => {
    expect(await catchExceptionAsync(async () => await modThree("abcd"))).to.eq(
      unexpectedInputError.message
    );
  });
  it("is invalid string: mixed alphabinary", async () => {
    expect(
      await catchExceptionAsync(async () => await modThree("1001a"))
    ).to.eq(unexpectedInputError.message);
  });
  it("is invalid string: mixed alphanumeric", async () => {
    expect(
      await catchExceptionAsync(async () => await modThree("123abc"))
    ).to.eq(unexpectedInputError.message);
  });
  it("is invalid string: special chars", async () => {
    expect(
      await catchExceptionAsync(async () => await modThree("101.2"))
    ).to.eq(unexpectedInputError.message);
  });
  it("is invalid string: special chars", async () => {
    expect(
      await catchExceptionAsync(async () => await modThree("$401.2"))
    ).to.eq(unexpectedInputError.message);
  });
  it("is invalid string: negative", async () => {
    expect(await catchExceptionAsync(async () => await modThree("-101"))).to.eq(
      unexpectedInputError.message
    );
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
