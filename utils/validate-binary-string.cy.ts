import validateBinaryString from "./validate-binary-string";

it("empty string", () => {
  expect(validateBinaryString("")).to.eq(false);
});

it("small binary string", () => {
  expect(validateBinaryString("1010")).to.eq(true);
});

it("small alphabet string", () => {
  expect(validateBinaryString("not a binary")).to.eq(false);
});

it("mixed alphabet string", () => {
  expect(validateBinaryString("10100a")).to.eq(false);
});

it("binary string with space", () => {
  expect(validateBinaryString("1010 0")).to.eq(false);
});

it("binary string with padding", () => {
  expect(validateBinaryString(" 1010 ")).to.eq(false);
});
