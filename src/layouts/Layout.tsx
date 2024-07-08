import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-primaryGray text-white min-h-screen flex flex-col items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
