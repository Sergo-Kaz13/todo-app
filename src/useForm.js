import { useState } from "react";

const useForm = (initialValues, registrationNewUser, setIsAuthenticated) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registrationNewUser(values);
    setIsAuthenticated((prev) => !prev);
  };
  return { values, handleChange, handleSubmit };
};

export default useForm;
