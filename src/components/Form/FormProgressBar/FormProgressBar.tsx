import { FormProgressBarProps } from "../../../types/types";
import { FormProgressBarContainer, FormProgressBarContent } from "./styles";

export const FormProgressBar = ({ progressBar }: FormProgressBarProps) => {
  return (
    <FormProgressBarContainer>
      <FormProgressBarContent progress={progressBar} />
    </FormProgressBarContainer>
  );
};
