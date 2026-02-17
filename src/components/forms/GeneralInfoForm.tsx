import { useState } from "react";
import type { GeneralInfo } from "../../types/cv";

interface GeneralInfoFormProps {
  generalInfo: GeneralInfo;
  onSave: (info: GeneralInfo) => void;
}

function GeneralInfoForm({ generalInfo, onSave }: GeneralInfoFormProps) {
  const [formData, setFormData] = useState<GeneralInfo>(generalInfo);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">General Information</h2>
    </div>
  );
}
export default GeneralInfoForm;
