export interface EducationData {
  title: string;
  years: string;
  grade: string;
}

export interface EducationProps {
  data: {
    mainEdu: EducationData;
    additionalEdu: EducationData;
  };
}
