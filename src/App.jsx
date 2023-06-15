import * as React from "react"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Footer from "./componenct/footer"
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
  {
    path: "/footer",
    element: <Footer />,
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
