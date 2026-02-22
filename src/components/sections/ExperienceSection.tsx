import type { Experience } from "../../types/cv";
import Card from "../ui/Card";
import EditableItemCard from "../ui/EditableItemCard";
import ExperienceForm from "../forms/ExperienceForm";

type Props = {
  experiences: Experience[];
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
};
function ExperienceSection({ experiences, setExperiences }: Props) {
  function handleAdd() {
    const newExperience: Experience = {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      resume: "",
    };
    setExperiences((prev) => [...prev, newExperience]);
  }
  return (
    <Card
      title="Experience"
      headerAction={
        <button
          onClick={handleAdd}
          className="bg-twilight-indigo-800 text-white px-3 py-1 rounded self-center"
        >
          Add
        </button>
      }
    >
      {experiences.length === 0 && (
        <p className="text-sm text-gray-500  mb-3">No experience added yet.</p>
      )}

      {experiences.map((exp) => (
        <EditableItemCard
          key={exp.id}
          id={exp.id}
          title={exp.position}
          subtitle={exp.company}
          onDelete={(id) =>
            setExperiences((prev) => prev.filter((e) => e.id !== id))
          }
        >
          <ExperienceForm data={exp} setExperiences={setExperiences} />
        </EditableItemCard>
      ))}
    </Card>
  );
}
export default ExperienceSection;
