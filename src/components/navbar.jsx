// =====> IMPORTS
import logo from "@/assets/logo/logo.png"
import CustomToggle from "./CustomToggle"
import useUIStore from "@/store/zustand"
import CustomNavLink from "./CustomNavLink";

// =====> MY-SETUP
const Navbar = ({ data = [] }) => {
  const open = useUIStore((state) => state.open);
  const setOpen = useUIStore((state) => state.setOpen);
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-999 p-6 bg-linear-to-r from-gray-900 to-indigo-400">
        <div className="flex justify-between items-center bg-gray-50 absolute top-[50%] right-[2%] left-[2%] md:right-[10%] md:left-[10%] rounded-lg shadow-md px-4 py-1.5 overflow-hidden">
          {/* =====> LOGO */}
          <div className="w-24">
            <img className="w-full" src={logo} alt="logo-billify" />
          </div>

          {/* =====> DESKTOP NAV */}
          <CustomNavLink customStyle={`hidden! md:flex!`} data={data} />

          {/* =====> MOBILE TOGGLE */}
          <CustomToggle customStyle={`block md:hidden`} onClick={() => setOpen(!open)} open={open} />
        </div>
      </header>

      {/* =====> MOBILE NAV */}
      <nav onClick={() => setOpen(!open)} className={`fixed ${open ? `z-998` : `-z-1`} block md:hidden duration-200 inset-0 bg-black/50`}>
        <CustomNavLink mobile data={data} />
      </nav>
    </>
  )
}

// =====> EXPORTS
export default Navbar;