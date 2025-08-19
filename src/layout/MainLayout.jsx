import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Navbar */}
      <div className="h-16">
        <Navbar />
      </div>

      {/* Body */}
      <div className="min-h-[calc(100vh-242px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
