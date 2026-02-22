import { useState } from "react";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

type EditableItemCardProps = {
  id: string;
  title: string;
  subtitle?: string;
  onDelete: (id: string) => void;
  children: React.ReactNode; // aquí irá el Form
};

function EditableItemCard({
  id,
  title,
  subtitle,
  onDelete,
  children,
}: EditableItemCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="rounded-lg p-4 bg-muted-teal-200 shadow-sm mb-3">
      {!isEditing ? (
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title || "Untitled"}</h3>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="border px-2 py-1 rounded text-sm"
            >
              <EditIcon className="w-5 h-5" />{" "}
            </button>

            <button
              onClick={() => onDelete(id)}
              className="border px-2 py-1 rounded text-sm"
            >
              <DeleteIcon className="w-5 h-5" />{" "}
            </button>
          </div>
        </div>
      ) : (
        <>
          {children}

          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-burnt-peach-700 px-3 py-1 rounded text-white"
            >
              Cancel
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-twilight-indigo-800 text-white px-3 py-1 rounded"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default EditableItemCard;
