import type { GeneralInfo } from "../../types/cv";
import Card from "../ui/Card";
import FormInput from "../ui/FormInput";

type Props = {
  data: GeneralInfo;
  setData: React.Dispatch<React.SetStateAction<GeneralInfo>>;
};
function GeneralInfoForm({ data, setData }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">General Information</h2>
      <div className="flex flex-col gap-4">
        <Card>
          <FormInput<GeneralInfo>
            type="text"
            label="Full Name"
            name="name"
            placeholder="Full Name"
            value={data.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <FormInput<GeneralInfo>
            type="email"
            label="Email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <FormInput<GeneralInfo>
            type="tel"
            label="Phone"
            name="phone"
            placeholder="Phone"
            value={data.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </Card>
      </div>
    </div>
  );
}
export default GeneralInfoForm;
