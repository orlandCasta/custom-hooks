import { useState } from "react";

export const useForm = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    console.log("handleFormChange:", value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleFormSubmit:", formState);
  };

  const onResetForm = (event) => {
    setFormState(initialForm);
    console.log("handleResetForm");
  };

  return {
    formState,
    onFormChange,
    onFormSubmit,
    onResetForm,
  };
};
