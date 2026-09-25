"use client";

import { createContext, ReactNode, useContext } from "react";

interface FitLogContextType {}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

interface FitLogProviderProps {
  children: ReactNode;
}

export const FitLogProvider = ({ children }: FitLogProviderProps) => {
  return <FitLogContext.Provider value={{}}>{children}</FitLogContext.Provider>;
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
