type Props<T> = {
  type?: string;
  label: string;
  name: keyof T;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function FormInput<T>({
  type = "text",
  label,
  name,
  placeholder,
  value,
  onChange,
  className,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <input
        type={type}
        name={String(name)}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`border p-2 rounded ${className}`}
      />
    </div>
  );
}

export default FormInput;
