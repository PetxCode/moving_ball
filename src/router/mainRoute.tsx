import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../page/MainScreen";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import ProtextRouter from "./ProtextRouter";
import BallScreen from "../page/BallScreen";
import BuildScreen from "../data/test/BuildScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtextRouter>
        <MainScreen />
      </ProtextRouter>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Test",
    element: <BallScreen />,
  },
  {
    path: "/start",
    element: <BuildScreen />,
  },
]);
