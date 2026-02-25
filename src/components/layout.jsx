// =====> IMPORTS
import { Outlet } from "react-router"
import Navbar from "./navbar";
import { FiClock, FiHome } from "react-icons/fi";
import CustomFooter from "./CustomFooter";

// =====> MY-SETUP
const Layout = () => {
  // =====> DATA NAVIGATION
  const navigationData = [
    { label: "Beranda", path: "/", Icon: FiHome },
    { label: "Riwayat", path: "/history", Icon: FiClock }
  ]

  return (
    <>
      <Navbar data={navigationData} />
      <main className={`bg-gray-300 min-h-screen py-20 px-2`}>
        <Outlet />
      </main>
      <CustomFooter />
    </>
  )
}

export default Layout;