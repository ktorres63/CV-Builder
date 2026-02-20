import type { Education } from "../../types/cv";
import CollapsibleCard from "../ui/DynamicSection";
import FormInput from "../ui/FormInput";

type Props = {
  data: Education;
  index: number;
  setData: React.Dispatch<React.SetStateAction<Education[]>>;
};
function EducationSection({ data, index, setData }: Props) {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setData((prev) => {
      const newEducations = [...prev];
      newEducations[index] = { ...newEducations[index], [name]: value };
      return newEducations;
    });
  }
  function handleDelete() {
    setData((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="rounded-lg shadow">
      <div className="flex flex-col gap-4">
        <CollapsibleCard title="Education">
          <FormInput<Education>
            type="text"
            label="School"
            name="school"
            placeholder="Full Name"
            value={data.school}
            onChange={handleChange}
            className="border p-2 rounded"
            maxLength={30}
          />
          <FormInput<Education>
            type="email"
            label="Degree"
            name="degree"
            placeholder="Email"
            value={data.degree}
            onChange={handleChange}
            className="border p-2 rounded"
            maxLength={25}
          />
          <FormInput<Education>
            type="year"
            label="Phone"
            name="year"
            placeholder="Phone"
            value={data.year}
            onChange={handleChange}
            className="border p-2 rounded"
            maxLength={10}
          />
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded mt-2"
          >
            Delete
          </button>
        </CollapsibleCard>
      </div>
    </div>
  );
}
export default EducationSection;
