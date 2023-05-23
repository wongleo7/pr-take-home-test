type InputProps = {
  name: string;
  value?: string;
  label: string;
  isError: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function NumberInput({
  name,
  value,
  label,
  isError,
  onChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="number"
        aria-label={label}
        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        value={value}
        onChange={onChange}
      />
      {isError && (
        <div id={`error-${name}`} className="text-red-500 text-xs">
          {isError}
        </div>
      )}
    </div>
  );
}
