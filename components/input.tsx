type InputProps = {
  value?: string;
  label: string;
  isError: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, label, isError, onChange }: InputProps) {
  return (
    <div>
      <label>
        <h2>{label}</h2>
        <input type="number" name="number" value={value} onChange={onChange} />
      </label>
      {isError && <div className="text-red-500 text-xs">{isError}</div>}
    </div>
  );
}
