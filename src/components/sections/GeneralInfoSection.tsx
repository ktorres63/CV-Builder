import type { GeneralInfo } from "../../types/cv";
import Card from "../ui/Card";
import FormInput from "../ui/FormInput";
import FormTextArea from "../ui/FormTextArea";

type Props = {
  data: GeneralInfo;
  setData: React.Dispatch<React.SetStateAction<GeneralInfo>>;
};
function GeneralInfoSection({ data, setData }: Props) {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="rounded-lg shadow">
      <div className="flex flex-col gap-4">
        <Card title="General Information">
          <FormInput<GeneralInfo>
            type="text"
            label="Full Name"
            name="name"
            placeholder="John Doe"
            value={data.name}
            onChange={handleChange}
            className="border p-2 rounded"
            maxLength={30}
          />
          <FormInput<GeneralInfo>
            type="email"
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            value={data.email}
            onChange={handleChange}
            className="border p-2 rounded"
            maxLength={25}
          />
          <FormInput<GeneralInfo>
            type="tel"
            label="Phone"
            name="phone"
            placeholder="912345678"
            value={data.phone}
            onChange={handleChange}
            className="border p-2 rounded"
            maxLength={10}
          />
          <FormTextArea<GeneralInfo>
            label="Resume"
            name="resume"
            placeholder="Software Engineer ...."
            value={data.resume}
            onChange={handleChange}
            className="border p-2 rounded"
            maxLength={430}
            rows={4}
          />
        </Card>
      </div>
    </div>
  );
}
export default GeneralInfoSection;
