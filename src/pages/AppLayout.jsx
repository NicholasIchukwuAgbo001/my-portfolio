import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
