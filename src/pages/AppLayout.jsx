import { Outlet } from "react-router-dom"; 
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="flex flex-col text-white">
      <Header />

      <main className="flex-grow px-4 py-3">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
