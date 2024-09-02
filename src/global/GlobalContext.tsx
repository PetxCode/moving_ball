import React, { createContext, FC, ReactNode, useState } from "react";

interface iProps {
  children?: ReactNode;
  state?: string;
  setState?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const ContextProvider = createContext({});

const GlobalContext: FC<iProps> = ({ children }) => {
  const [state, setState] = useState<string>();
  return (
    <ContextProvider.Provider value={{ state, setState }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default GlobalContext;
