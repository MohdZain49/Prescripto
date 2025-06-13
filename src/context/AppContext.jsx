import { createContext, useContext } from "react";

import { doctors, specialityData } from "../assets/assets";

const AppContext = createContext({
  specialityData: [],
  doctors: [],
});

export const AppContextProvider = ({ children }) => {
  const value = { specialityData, doctors };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default useAppContext;
