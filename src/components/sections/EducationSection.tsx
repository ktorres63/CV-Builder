import type { Education } from "../../types/cv";

import Card from "../ui/Card";
import EditableItemCard from "../ui/EditableItemCard";
import EducationForm from "../forms/EducationForm";

type Props = {
  educations: Education[];
  setEducations: React.Dispatch<React.SetStateAction<Education[]>>;
};
function EducationSection({ educations, setEducations }: Props) {
  function handleAdd() {
    const newEducation: Education = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    };
    setEducations((prev) => [...prev, newEducation]);
  }
  return (
    <Card
      defaultOpen={false}
      title="Education"
      headerAction={
        <button
          onClick={handleAdd}
          className="bg-twilight-indigo-800 text-white px-3 py-1 rounded self-center"
        >
          Add
        </button>
      }
    >
      {educations.length === 0 && (
        <p className="text-sm text-gray-500 mb-3">No education added yet.</p>
      )}

      {educations.map((edu) => (
        <EditableItemCard
          key={edu.id}
          id={edu.id}
          title={edu.school}
          subtitle={edu.location}
          onDelete={(id) =>
            setEducations((prev) => prev.filter((e) => e.id !== id))
          }
        >
          <EducationForm data={edu} setEducations={setEducations} />
        </EditableItemCard>
      ))}
    </Card>
  );
}
export default EducationSection;
