import { createContext } from 'react';

export const PetContext = createContext();
export const PetProvider = ({ children }) => {
  const petData = {
    // Add your pet-related data and functions here
  };

  return (
    <PetContext.Provider value={petData}>
      {children}
    </PetContext.Provider>
  );
};