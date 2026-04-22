import { useState } from "react";

// context
import { FitnessContext } from "./FitnessContext";

export const FitnessContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "A név megadása kötelező!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Az email megadása kötelező!";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Hibás email formátum!";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Az üzenet nem lehet üres!";
    }

    return newErrors;
  };
  return (
    <FitnessContext.Provider
      value={{
        formData,
        errors,
        handleChange,
        handleSubmit,
        validate,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};
