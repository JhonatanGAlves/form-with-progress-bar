import { FormGroupProps } from "../../../types/types";
import { FormFieldContainer } from "./styles";

export const FormField = ({ label, field }: FormGroupProps) => {
  return (
    <FormFieldContainer>
      <label htmlFor={label}>{label}</label>
      {field}
    </FormFieldContainer>
  );
};
