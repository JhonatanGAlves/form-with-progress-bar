import styled from "styled-components";

export const FormContainer = styled.main`
  margin-top: 1.875rem;
  padding: 1.875rem;

  font-family: "Verdana", sans-serif;
  border-radius: 10px;

  background: white;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    width: 100%;
    height: 2.5rem;

    font-size: 1rem;
    color: #333;

    border: none;
    border-radius: 5px;
    background-color: #ddd;

    :hover:not([disabled]) {
      cursor: pointer;

      background-color: #d4d4d4;
    }

    :disabled {
      cursor: not-allowed;

      color: #aaa;
    }
  }
`;
