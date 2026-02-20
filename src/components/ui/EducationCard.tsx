import { useState } from "react";
import type { Education } from "../../types/cv";
// import EducationForm from "../forms/EducationForm";

type Props = {
  data: Education;
  index: number;
  setEducations: React.Dispatch<React.SetStateAction<Education[]>>;
};

function EducationCard({ data, index, setEducations }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {
    setEducations((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm mb-3">
      {!isEditing ? (
        // =======================
        // VIEW MODE
        // =======================
        <>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">
                {data.school || "Untitled Education"}
              </h3>
              <p className="text-sm text-gray-700">{data.degree}</p>
              <p className="text-sm text-gray-500">
                {data.startDate} - {data.endDate}
              </p>
              <p className="text-sm text-gray-500">{data.location}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-400 px-2 py-1 rounded text-sm"
              >
                Edit
              </button>

              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      ) : (
        // =======================
        // EDIT MODE
        // =======================
        <>
          {/*<EducationForm
            data={data}
            index={index}
            setEducations={setEducations}
          />*/}

          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default EducationCard;
