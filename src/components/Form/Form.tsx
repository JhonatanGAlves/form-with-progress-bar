import { useState } from "react";
import { selectOptions } from "../../data/mock";
import { emptyFormFields, FormFieldsTypes } from "../../types/types";
import { FormField } from "./FormField/FormField";
import { FormContainer } from "./styles";

export const Form = () => {
  const [values, setValues] = useState<FormFieldsTypes>(emptyFormFields);

  const handleOnChange = (e: any) => {
    const { name: property, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  return (
    <FormContainer>
      {/* crie a barra de progresso aqui */}
      <FormField
        label="Full Name"
        field={
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleOnChange}
          />
        }
      />
      <FormField
        label="E-mail"
        field={
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleOnChange}
          />
        }
      />
      <FormField
        label="Marital status"
        field={
          <select
            name="maritalStatus"
            value={values.maritalStatus}
            onChange={handleOnChange}
            placeholder={"Select..."}
          >
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        }
      />
      <FormField
        label="Genre"
        field={
          <div className="radios-container">
            <span>
              <input
                type="radio"
                name="genre"
                value="male"
                onChange={handleOnChange}
                checked={values.genre === "male"}
              />{" "}
              Male
            </span>
            <span>
              <input
                type="radio"
                name="genre"
                value="female"
                onChange={handleOnChange}
                checked={values.genre === "female"}
              />{" "}
              Female
            </span>
          </div>
        }
      />
      <button>Submit Form</button>
    </FormContainer>
  );
};
