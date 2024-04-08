interface IInputFields {
  label: string;
  textArea?: boolean;
}
export interface IFormField {
  title: string;
  submitButton: string;
  text1?: string;
  link1?: string;
  text2?: string;
  link2?: string;
  inputFields: IInputFields[];
  caption?: string;
  radioGroup?: {
    title: string;
    options: string[];
  };
  checkboxConfirmation?: boolean;
}
