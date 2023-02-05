import { FormFieldsTypes } from "../types/types";

export const calculateProgressBar = (values: FormFieldsTypes) => {
  const totalPercent = 100;
  const totalProperties = Object.keys(values).length;
  let validatedInputs = 0;

  if (values.fullName) {
    const explodeString = values.fullName.split(" ");
    if (explodeString[1]) {
      validatedInputs += 1;
    }
  }

  if (values.email) {
    validatedInputs += 1;
  }

  if (values.maritalStatus) {
    validatedInputs += 1;
  }

  if (values.genre) {
    validatedInputs += 1;
  }

  let partialPercent = (totalPercent * validatedInputs) / totalProperties;

  return partialPercent;
};
