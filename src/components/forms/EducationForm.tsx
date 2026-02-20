import type { Education } from "../../types/cv";
import FormInput from "../ui/FormInput";

type Props = {
  data: Education;
  setEducations: React.Dispatch<React.SetStateAction<Education[]>>;
};

function EducationForm({ data, setEducations }: Props) {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setEducations((prev) =>
      prev.map((edu) => (edu.id === data.id ? { ...edu, [name]: value } : edu)),
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <FormInput<Education>
        type="text"
        label="School"
        name="school"
        placeholder="Harvard University"
        value={data.school}
        onChange={handleChange}
        maxLength={30}
      />

      <FormInput<Education>
        type="text"
        label="Degree"
        name="degree"
        placeholder="Bachelor of Computer Science"
        value={data.degree}
        onChange={handleChange}
        maxLength={40}
      />

      <FormInput<Education>
        type="text"
        label="Start Date"
        name="startDate"
        placeholder="2020"
        value={data.startDate}
        onChange={handleChange}
        maxLength={10}
      />

      <FormInput<Education>
        type="text"
        label="End Date"
        name="endDate"
        placeholder="2024"
        value={data.endDate}
        onChange={handleChange}
        maxLength={10}
      />

      <FormInput<Education>
        type="text"
        label="Location"
        name="location"
        placeholder="Boston, MA"
        value={data.location}
        onChange={handleChange}
        maxLength={30}
      />
    </div>
  );
}

export default EducationForm;
