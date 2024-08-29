import { useEffect, useState } from "react";
import { selectOptions } from "../../data/mock";
import { emptyFormFields, FormFieldsTypes } from "../../types/types";
import { calculateProgressBar } from "../../utils/utils";
import { GlobalNotification } from "../GlobalNotification/GlobalNotification";
import { Loading } from "../Loading/Loading";
import { FormField } from "./FormField/FormField";
import { FormProgressBar } from "./FormProgressBar/FormProgressBar";
import { FormContainer } from "./styles";

export const Form = () => {
  const [values, setValues] = useState<FormFieldsTypes>(emptyFormFields);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnChange = (e: any) => {
    const { name: property, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);

    // simulating a delay to see loading functionality
    if (calculateProgressBar(values) === 100) {
      setTimeout(() => {
        setValues(emptyFormFields);
        setShowSuccessMessage(true);
        setLoading(false);
      }, 2500);
    }
  };

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(function () {
        setShowSuccessMessage(false);
      }, 7000);
    }
  }, [showSuccessMessage]);

  return (
    <>
      {showSuccessMessage && (
        <GlobalNotification
          message="Login successful."
          onClick={() => setShowSuccessMessage(false)}
        />
      )}
      <FormContainer>
        <FormProgressBar progressBar={calculateProgressBar(values)} />
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
              onChange={handleOnChange}
              placeholder={"Select..."}
            >
              {selectOptions.map((option) => (
                <option key={option.value}>{option.label}</option>
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
        <button
          onClick={handleSubmit}
          disabled={calculateProgressBar(values) !== 100}
        >
          {loading && <Loading />}
          Submit Form
        </button>
      </FormContainer>
    </>
  );
};
