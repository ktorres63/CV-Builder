import { useState } from "react";
import type { GeneralInfo, Education, Experience } from "./types/cv.ts";
import GeneralInfoSection from "./components/sections/GeneralInfoSection.tsx";
import EducationSection from "./components/sections/EducationSection.tsx";
import CvPreview from "./components/pdf/CVPreview.tsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CvDocument from "./components/pdf/cvDocument.tsx";
import ExperienceSection from "./components/sections/ExperienceSection.tsx";

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "989919299",
    resume:
      "Lorem ipsum,corruptiesciunt, nemo nihil. Autem neque exercitationem distinctio labore porro tenetur, quam iure quaerat asperiores veritatis dolor accusamus blanditiis rem esse atque enim, eligendi voluptatum impedit quae maiores! Quae repellat a incidunt sapiente reiciendis! Praesentium officiis fugit, ea, dolorum",
  });

  const [educations, setEducation] = useState<Education[]>([
    {
      id: "1",
      school: "University of Example",
      degree: "Bachelor of Science",
      startDate: "2000",
      endDate: "2019",
      location: "City, Country",
    },
    {
      id: "2",
      school: "University of Example",
      degree: "Bachelor of Science",
      startDate: "2000",
      endDate: "2019",
      location: "City, Country",
    },
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "99",
      company: "Apple ABC",
      position: "Software Engineer",
      startDate: "2019",
      endDate: "2029",
      resume:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas deserunt inventore illum iste exercitationem nostrum, autem dolorem cupiditate qui ullam ex hic ab mollitia eveniet ad reprehenderit eaque quod?",
    },
    {
      id: "929",
      company: "University of Example",
      position: "Bachelor of Science",
      startDate: "2000",
      endDate: "2019",
      resume:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas deserunt inventore illum iste exercitationem nostrum, autem dolorem cupiditate qui ullam ex hic ab mollitia eveniet ad reprehenderit eaque quod?Perspiciatis placeat ullam odit enim exercitationem venia",
    },
  ]);

  return (
    <div className="font-sans min-h-screen bg-apricot-cream-200 p-8 flex flex-col">
      <h1 className="text-3xl font-bold self-center mb-4">CV-Builder</h1>
      <div className="flex gap-8 justify-center">
        {/* LEFT COLUMN - FORMS */}
        <div className="min-w-96 flex flex-col gap-5">
          <GeneralInfoSection data={generalInfo} setData={setGeneralInfo} />

          <EducationSection
            educations={educations}
            setEducations={setEducation}
          />

          <ExperienceSection
            experiences={experiences}
            setExperiences={setExperiences}
          />
          <PDFDownloadLink
            document={
              <CvDocument
                generalInfo={generalInfo}
                educations={educations}
                experiences={experiences}
              />
            }
            fileName="cv.pdf"
            className="mb-4 bg-twilight-indigo-800 text-white px-4 py-2 rounded-xl flex justify-center"
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
