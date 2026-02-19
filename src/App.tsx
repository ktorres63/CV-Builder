import { useState } from "react";
import type { GeneralInfo, Education, Experience } from "./types/cv.ts";
import GeneralInfoForm from "./components/forms/GeneralInfoForm.tsx";
import CvPreview from "./components/preview/CVPreview.tsx";
import html2pdf from "html2pdf.js";

function handleExportPDF() {
  const element = document.getElementById("cv-preview");
  if (!element) return;

  html2pdf()
    .set({
      margin: 0,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "px", format: [764, 1123], orientation: "portrait" },
    })
    .from(element)
    .save();
}

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
    name: "John Doe",
    email: "jhon@gmail.com",
    phone: "989919299",
    resume: "",
  });

  const [educations, setEducations] = useState<Education[]>([]);

  const [experiences, setExperiences] = useState<Experience[]>([]);

  return (
    <div className="font-sans min-h-screen bg-gray-400 p-8 flex flex-col">
      <h1 className="text-3xl font-bold self-center mb-4">CV-Builder</h1>
      <div className="flex gap-8 justify-center">
        {/* LEFT COLUMN - FORMS */}
        <div className="min-w-96">
          <GeneralInfoForm data={generalInfo} setData={setGeneralInfo} />
          {/* Aquí van tus Forms */}
          {/* <GeneralInfoForm /> */}
          {/* <EducationForm /> */}
          {/* <ExperienceForm /> */}
          <button
            onClick={handleExportPDF}
            className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Export to PDF
          </button>
        </div>

        {/* RIGHT COLUMN - PREVIEW */}
        <div className="flex justify-center">
          <CvPreview
            generalInfo={generalInfo}
            educations={educations}
            experiences={experiences}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
