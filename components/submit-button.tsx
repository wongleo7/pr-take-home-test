type SubmitButtonProps = {
  label: string;
  disabled?: boolean;
};

export default function SubmitButton({ label, disabled }: SubmitButtonProps) {
  return (
    <div className="flex items-center justify-center mt-3">
      <button
        id="submit-button"
        aria-label="submit"
        className={
          disabled
            ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
        type="submit"
        value="Submit"
      >
        {label}
      </button>
    </div>
  );
}
