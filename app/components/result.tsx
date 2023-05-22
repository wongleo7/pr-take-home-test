type ResultProps = {
  result: string;
};

export default function Result({ result }: ResultProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <h3>Result: {result}</h3>
    </div>
  );
}
