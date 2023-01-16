import React from "react";
import { createContext } from "react";
import { iContextProps, iLoadingContext } from "../../types/types";
import { useState } from "react";

export const loadingContext = createContext({} as iLoadingContext);

export const LoadingProvider = ({ children }: iContextProps) => {
  const [loading, toggleLoading] = useState(false);
  return (
    <loadingContext.Provider value={{ loading, toggleLoading }}>
      {children}
    </loadingContext.Provider>
  );
};

export default LoadingProvider;
