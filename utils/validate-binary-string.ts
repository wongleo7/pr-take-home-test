export default function validateBinaryString(input: string): boolean {
  const binaryRegex = /^[0-1]{1,}$/;
  return binaryRegex.test(input);
}
