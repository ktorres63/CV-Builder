type Props<T> = {
  type?: string;
  label: string;
  name: keyof T;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  maxLength?: number;
};

function FormInput<T>({
  type = "text",
  label,
  name,
  placeholder,
  value,
  onChange,
  className,
  maxLength,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-bold">{label}</label>

      <input
        type={type}
        name={String(name)}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`border p-2 rounded ${className}`}
        maxLength={maxLength}
      />
    </div>
  );
}

export default FormInput;
