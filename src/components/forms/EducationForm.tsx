import type { Education } from "../../types/cv";
import Card from "../ui/Card";
import FormInput from "../ui/FormInput";

type Props = {
  data: Education;
  setData: React.Dispatch<React.SetStateAction<Education>>;
};
function EducationForm({ data, setData }: Props) {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="rounded-lg shadow">
      <div className="flex flex-col gap-4">
        <Card title="Education">
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
        </Card>
      </div>
    </div>
  );
}
export default EducationForm;
