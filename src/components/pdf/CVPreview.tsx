import type { GeneralInfo, Education, Experience } from "../../types/cv";

type Props = {
  generalInfo: GeneralInfo;
  educations: Education[];
  experiences: Experience[];
};
function CvPreview({ generalInfo, educations, experiences }: Props) {
  return (
    <div
      id="cv-preview"
      className="bg-white p-10 flex flex-col w-198 min-h-280 border"
    >
      <div className="h-px bg-black mb-3 "></div>
      <h1 className="text-3xl self-center font-bold">
        {generalInfo.name ? generalInfo.name.toUpperCase() : "YOUR NAME"}
      </h1>
      <div className="h-px bg-black mb-0.75 mt-2"></div>
      <div className="h-0.75 bg-black "></div>
      <div className="mt-1.5 flex flex-row gap-3 justify-center text-sm">
        <p>◆ {generalInfo.phone}</p>
        <p>◆ {generalInfo.email}</p>
      </div>
      <div className="flex flex-row  justify-center items-center mt-2.5">
        <div className="h-px bg-black flex-1 "></div>
        <h2 className="text-lg font-bold px-3 whitespace-nowrap">Resume</h2>
        <div className="h-px bg-black flex-1"></div>
      </div>
      <p className="text-sm">{generalInfo.resume}</p>
      <div className="flex flex-row  justify-center items-center mt-2.5">
        <div className="h-px bg-black flex-1 "></div>
        <h2 className="text-lg font-bold px-3 whitespace-nowrap">Education</h2>
        <div className="h-px bg-black  flex-1"></div>
      </div>

      {educations.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center gap-20 justify-between">
            <div className="flex flex-col">
              <p className="text-base font-bold ">{item.school}</p>
              <p className="text-sm">{item.degree}</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-sm">{item.location}</p>
              <p className="text-sm">
                {item.startDate} - {item.endDate}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-row  justify-center items-center mt-2.5">
        <div className="h-px bg-black  flex-1 "></div>
        <h2 className="text-lg font-bold px-3 whitespace-nowrap ">
          Experience
        </h2>
        <div className="h-px bg-black flex-1"></div>
      </div>
      <div className="flex flex-row   items-center mt-2.5">
        {experiences.map((item, index) => (
          <div key={index} className="mb-4">
            <p className="font-bold text-sm">{item.position}</p>
            <h3 className="text-base  mb-2">{item.company}</h3>
            <p className="text-sm">
              {item.startDate} - {item.endDate}
            </p>
            <p className="text-sm">{item.resume}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CvPreview;
