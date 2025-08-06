import { Outlet } from "react-router-dom"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800 text-white">
      <Header />

      <main className="flex-grow px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
