import type { GeneralInfo, Education, Experience } from "../../types/cv";

type Props = {
  generalInfo: GeneralInfo;
  educations: Education[];
  experiences: Experience[];
};
function CvPreview({ generalInfo, educations, experiences }: Props) {
  return (
    <div id="cv-preview" className="bg-white rounded-lg shadow-md p-4">
      <h1 className="text-2xl font-bold">{generalInfo.name || "Your Name"}</h1>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>
      <h2 className="text-lg font-bold mt-8 mb-4">Education</h2>
      {/*<div className="bg-green-300 shadow-md rounded p-4">
        {educations.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-bold mb-2">{item.institution}</h3>
            <p className="text-sm">{item.degree}</p>
            <p className="text-sm">{item.fieldOfStudy}</p>
            <p className="text-sm">
              {item.startDate} - {item.endDate}
            </p>
          </div>
        ))}
      </div>*/}
      <h2 className="text-lg font-bold mt-8 mb-4">Experience</h2>
      {/*<div className="bg-green-300 shadow-md rounded p-4">
        {experiences.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-bold mb-2">{item.company}</h3>
            <p className="text-sm">{item.position}</p>
            <p className="text-sm">
              {item.startDate} - {item.endDate}
            </p>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>*/}
    </div>
  );
}
export default CvPreview;
