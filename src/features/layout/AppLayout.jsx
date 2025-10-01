import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="flex-grow px-4 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
