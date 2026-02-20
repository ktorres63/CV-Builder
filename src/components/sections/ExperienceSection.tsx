import type { Experience } from "../../types/cv";

import Card from "../ui/Card";
import EducationCard from "../ui/EducationCard";
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
      title="Education"
      headerAction={
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-3 py-1 rounded self-center"
        >
          Add
        </button>
      }
    >
      {educations.length === 0 && (
        <p className="text-sm text-gray-500">No education added yet.</p>
      )}

      {educations.map((edu, index) => (
        <EducationCard
          key={edu.id}
          education={edu}
          index={index}
          setEducations={setEducations}
        />
      ))}
    </Card>
  );
}
export default EducationSection;
