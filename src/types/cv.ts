export type GeneralInfo = {
  name: string;
  email: string;
  phone: string;
  resume: string;
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  responsibilities: string[];
  from: string;
  to: string;
};
