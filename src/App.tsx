import { useState } from "react";
import type { GeneralInfo, Education, Experience } from "./types/cv.ts";

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
    name: "John Doe",
    email: "jhon@gmail.com",
    phone: "989919299",
  });

  const [educations, setEducations] = useState<Education[]>([]);

  const [experiences, setExperiences] = useState<Experience[]>([]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-2 gap-8">
        {/* LEFT COLUMN - FORMS */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Editor</h2>

          {/* Aquí van tus Forms */}
          {/* <GeneralInfoForm /> */}
          {/* <EducationForm /> */}
          {/* <ExperienceForm /> */}
        </div>

        {/* RIGHT COLUMN - PREVIEW */}
        <div id="cv-preview" className="bg-white min-h-275 shadow-lg p-10">
          <h1 className="text-2xl font-bold">
            {generalInfo.name || "Your Name"}
          </h1>
          <p>{generalInfo.email}</p>
          <p>{generalInfo.phone}</p>
          {/* Educations */}
          {educations.map((edu) => (
            <div key={edu.id} className="mt-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p>{edu.school}</p>
              <p>{edu.year}</p>
            </div>
          ))}
          {/* Experiences */}
          {experiences.map((exp) => (
            <div key={exp.id} className="mt-4">
              <h3 className="font-semibold">{exp.position}</h3>
              <p>{exp.company}</p>
              <p>
                {exp.from} - {exp.to}
              </p>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
