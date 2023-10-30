export interface ISignFormVacancyCreator {
  jobtitle: string;
  specialization: String;
  city?: string;
  jobdescription?: string;
  conditions?: string;
  selectionssteps?: string;
  schedule?: string;
  busy?: string;
  hardSkillListImport?: any;
  hardSkillListAdd?: any;
}
export interface ICreateVacancyFormSteps {
  open: boolean;
  onClose: any;
  submitNewVacancy: any;
}
