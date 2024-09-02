import React, { FC, useEffect } from "react";
import { Navigate, Navigation } from "react-router-dom";
import { verifyAccountUser } from "../api/apiCalls";

interface iProps {
  children: React.ReactNode;
}

const ProtextRouter: FC<iProps> = ({ children }) => {
  useEffect(() => {
    verifyAccountUser();
  }, []);
  return <div>{children}</div>;
};

export default ProtextRouter;
