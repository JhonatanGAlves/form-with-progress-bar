import { ReactElement } from "react";

export interface FormGroupProps {
  label: string;
  field: ReactElement;
}

export type FormFieldsTypes = {
  fullName: string;
  email: string;
  maritalStatus: string;
  genre: string;
};

export const emptyFormFields: FormFieldsTypes = {
  fullName: "",
  email: "",
  maritalStatus: "",
  genre: "",
};
