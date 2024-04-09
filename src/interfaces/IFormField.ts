interface IInputFields {
  label: string;
  textArea?: boolean;
}

interface ITexts {
  value: string;
  link?: string;
}

export interface IFormField {
  title: string;
  submitButton: string;
  texts?: ITexts[];
  inputFields: IInputFields[];
  caption?: string;
  radioGroup?: {
    title: string;
    options: string[];
  };
  checkboxConfirmation?: boolean;
}
