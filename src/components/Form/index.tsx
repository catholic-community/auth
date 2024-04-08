"use client";

import InputField from "../FormComponents/InputField";
import StyledTypography from "../FormComponents/Typography";
import FormCard from "../FormComponents/FormCard";
import StyledRadioGroup from "../FormComponents/RadioGroups";
import { IFormField } from "@/interfaces/IFormField";
import FormFields from "@/schema/FormFields.json";

const Form = () => {
  const formFields: IFormField[] = FormFields;

  const selectedStep = 0;

  return (
    <FormCard
      submitButtonText={formFields[selectedStep].submitButton}
      rememberCheckBox={formFields[selectedStep].checkboxConfirmation}
    >
      <StyledTypography type="h5" text={formFields[selectedStep].title} />

      {formFields[selectedStep].radioGroup && (
        <StyledRadioGroup
          title={formFields[selectedStep].radioGroup.title}
          labels={formFields[selectedStep].radioGroup.options}
        />
      )}

      {formFields[selectedStep].text1 && (
        <StyledTypography
          text={formFields[selectedStep].text1}
          linkText={
            formFields[selectedStep].link1 ? formFields[selectedStep].link1 : ""
          }
        />
      )}
      {formFields[selectedStep].text2 && (
        <StyledTypography
          text={formFields[selectedStep].text2}
          linkText={
            formFields[selectedStep].link2 ? formFields[selectedStep].link2 : ""
          }
        />
      )}
      {formFields[selectedStep].inputFields.map((item) => (
        <InputField
          label={item.label}
          key={item.label}
          multiline={item.textArea}
        />
      ))}

      {formFields[selectedStep].caption && (
        <StyledTypography
          text={formFields[selectedStep].caption}
          type="caption"
        />
      )}
    </FormCard>
  );
};

export default Form;
