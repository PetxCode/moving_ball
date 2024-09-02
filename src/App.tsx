import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRoute";
import GlobalContext from "./global/GlobalContext";

const App = () => {
  return (
    <GlobalContext>
      <RouterProvider router={mainRouter} />
    </GlobalContext>
  );
};

export default App;
