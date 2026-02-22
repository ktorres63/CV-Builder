import type { Experience } from "../../types/cv";
import FormInput from "../ui/FormInput";
import FormTextArea from "../ui/FormTextArea";

type Props = {
  data: Experience;
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
};

function ExperienceForm({ data, setExperiences }: Props) {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setExperiences((prev) =>
      prev.map((edu) => (edu.id === data.id ? { ...edu, [name]: value } : edu)),
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <FormInput<Experience>
        type="text"
        label="Position"
        name="position"
        placeholder="Software Engineer"
        value={data.position}
        onChange={handleChange}
        maxLength={30}
      />

      <FormInput<Experience>
        type="text"
        label="Company"
        name="company"
        placeholder="ABC Inc."
        value={data.company}
        onChange={handleChange}
        maxLength={40}
      />

      <div className="flex flex-row justify-between gap-4">
        <FormInput<Experience>
          type="number"
          label="Start Date"
          name="startDate"
          placeholder="2020"
          value={data.startDate}
          onChange={handleChange}
          className="max-w-38"
          maxLength={4}
        />

        <FormInput<Experience>
          type="number"
          label="End Date"
          name="endDate"
          placeholder="2024"
          value={data.endDate}
          onChange={handleChange}
          className="max-w-38"
          maxLength={10}
        />
      </div>

      <FormTextArea<Experience>
        label="Responsibilities"
        name="resume"
        placeholder="I build a software application that..."
        value={data.resume}
        onChange={handleChange}
        maxLength={430}
        rows={6}
      />
    </div>
  );
}

export default ExperienceForm;
