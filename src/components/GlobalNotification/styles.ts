import styled from "styled-components";

export const GlobalNotificationContainer = styled.div`
  position: fixed;
  top: 2rem;
  left: calc(50% - 21.35rem);

  display: flex;

  min-width: 43.75rem;
  height: 5rem;
  padding: 0.5rem 1rem;

  border-radius: 5px;

  background-color: aquamarine;
`;

export const GlobalNotificationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .icon-and-message {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-close {
    position: absolute;
    top: 16px;
    right: 16px;

    cursor: pointer;
  }
`;
