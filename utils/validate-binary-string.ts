export default function validateBinaryString(input?: string): boolean {
  const binaryRegex = /^[0-1]{1,}$/;
  if (input === "" || input === undefined) return true;
  return binaryRegex.test(input);
}
