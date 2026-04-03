import {} from "react";

// context
import { FitnessContext } from "./FitnessContext";

export const FitnessContextProvider = ({ children }) => {
  return (
    <FitnessContext.Provider value={{}}>{children}</FitnessContext.Provider>
  );
};
