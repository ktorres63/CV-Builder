import { useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
type Props = {
  title?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  headerAction?: React.ReactNode;
};

function Card({
  children,
  title = "",
  defaultOpen = true,
  headerAction,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="bg-background-card shadow-md rounded-xl p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-background-card px-2 py-1 rounded"
        >
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          {children}
          {headerAction}
        </div>
      )}
    </div>
  );
}

export default Card;
