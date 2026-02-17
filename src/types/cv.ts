export type GeneralInfo = {
  name: string;
  email: string;
  phone: string;
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  year: string;
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  responsibilities: string[];
  from: string;
  to: string;
};
