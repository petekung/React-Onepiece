import * as React from "react"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
function App() {
  ReactDOM.createRoot(document.getElementById("root")).render(
  
      <React.StrictMode>

        <RouterProvider router={router} />


      </React.StrictMode>

  );

}
export default App
