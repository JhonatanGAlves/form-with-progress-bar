import styled from "styled-components";

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  :last-child {
    margin: 0;
  }

  label {
    margin-bottom: 5px;
  }

  input:not([type="radio"]),
  select {
    width: 100%;
    height: 2.5rem;
    padding-left: 0.625rem;

    border: 1px solid #ccc;
    border-radius: 6px;

    font-family: "Verdana", sans-serif;
    font-size: 0.875rem;

    color: #333;
    background-color: #eee;
  }

  span {
    margin-right: 15px;
  }
`;
