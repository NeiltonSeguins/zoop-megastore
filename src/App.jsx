import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./paginas/Home";
import Produto from "./paginas/Produto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produtos/:produto",
    element: <Produto />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
