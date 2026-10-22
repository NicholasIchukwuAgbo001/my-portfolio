import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import AppLayout from "./features/layout/AppLayout";
import ScrollProgress from "./components/ScrollProgress";
import GlowingOrbs from "./components/GlowingOrbs";
import ParticleField from "./components/ParticleField";
import GridBackground from "./components/GridBackground";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

const App = () => {
  useEffect(() => {
    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <GlowingOrbs />
      <GridBackground />
      <ParticleField />
      <ScrollProgress />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
