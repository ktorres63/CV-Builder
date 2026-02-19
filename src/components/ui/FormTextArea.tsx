type Props<T> = {
  label: string;
  name: keyof T;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  maxLength?: number;
  rows?: number;
};

function FormTextArea<T>({
  label,
  name,
  placeholder,
  value,
  onChange,
  className,
  maxLength,
  rows = 4,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <textarea
        name={String(name)}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`border p-2 rounded ${className}`}
        maxLength={maxLength}
        rows={rows}
      />
    </div>
  );
}

export default FormTextArea;
