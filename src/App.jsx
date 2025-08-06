import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
    ],
  },
]);

const App = () => { 
  return <RouterProvider router={router} />
}

export default App