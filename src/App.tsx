import { useState } from "react";
import type { GeneralInfo, Education, Experience } from "./types/cv.ts";
import GeneralInfoForm from "./components/forms/GeneralInfoForm.tsx";
import EducationForm from "./components/forms/EducationForm.tsx";
import CvPreview from "./components/pdf/CVPreview.tsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CvDocument from "./components/pdf/cvDocument.tsx";

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
    name: "John Doe",
    email: "john@gmail.com",
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
        <div className="min-w-96 flex flex-col gap-5">
          <GeneralInfoForm data={generalInfo} setData={setGeneralInfo} />
          <EducationForm data={educations} setData={setEducations} />

          {/* Aquí van tus Forms */}
          {/* <GeneralInfoForm /> */}
          {/* <EducationForm /> */}
          {/* <ExperienceForm /> */}
          <PDFDownloadLink
            document={
              <CvDocument
                generalInfo={generalInfo}
                educations={educations}
                experiences={experiences}
              />
            }
            fileName="cv.pdf"
            className="mb-4 bg-blue-600 text-white px-4 py-2 rounded inline-block"
          >
            {({ loading }) => (loading ? "Generating PDF..." : "Export to PDF")}
          </PDFDownloadLink>
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
