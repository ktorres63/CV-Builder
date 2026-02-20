import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  headerAction?: React.ReactNode;
};

function DynamicSection({
  title,
  children,
  defaultOpen = true,
  headerAction,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-green-300 shadow-md rounded-xl p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>

        <div className="flex items-center gap-2">
          {headerAction}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-gray-200 px-2 py-1 rounded"
          >
            {isOpen ? "−" : "+"}
          </button>
        </div>
      </div>

      {/* Content */}
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default DynamicSection;
