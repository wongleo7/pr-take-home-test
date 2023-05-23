type SubmitButtonProps = {
  label: string;
};

export default function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <div className="flex items-center justify-center mt-3">
      <button
        id="submit-button"
        aria-label="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        value="Submit"
      >
        {label}
      </button>
    </div>
  );
}
