import {
  GlobalNotificationContainer,
  GlobalNotificationContent,
} from "./styles";
import CheckCircle from "phosphor-react/src/icons/CheckCircle";
import X from "phosphor-react/src/icons/X";
import { GlobalNotificationProps } from "../../types/types";

export const GlobalNotification = ({
  message,
  onClick,
}: GlobalNotificationProps) => {
  return (
    <GlobalNotificationContainer>
      <GlobalNotificationContent>
        <div className="icon-and-message">
          <CheckCircle size={32} />
          <span>{message}</span>
        </div>
        <X className="btn-close" size={18} onClick={onClick} />
      </GlobalNotificationContent>
    </GlobalNotificationContainer>
  );
};
