import { LoadingContainer } from "./styles";
import Spinner from "phosphor-react/src/icons/Spinner";

export const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner size={22} />
    </LoadingContainer>
  );
};
