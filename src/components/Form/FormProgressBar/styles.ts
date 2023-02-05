import styled from "styled-components";

export const FormProgressBarContainer = styled.div`
  background: white;
  border: 1px solid #999;
  width: 100%;
  height: 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

export const FormProgressBarContent = styled.div<{ progress: number }>`
  background: ${({ progress }) =>
    progress === 100 ? "aquamarine" : "#535bf2"};
  width: ${({ progress }) => progress}%;
  height: 100%;

  transition: width 0.5s ease;
`;
