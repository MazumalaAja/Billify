// =====> IMPORTS
import { NavLink } from "react-router"

// =====> MY-SETUP
const CustomNavLink = ({ data, customStyle, Icon, mobile }) => {
  // =====> NAVLINK STYLES
  const styles = ({ isActive }) => `${isActive ? `text-gray-700 after:scale-x-90!` : `text-gray-400`} hover:text-gray-700 duration-200 relative after:absolute after:left-0 after:-bottom-3 after:w-full after:border-b-4 after:border-b-gray-700 after:scale-x-0 hover:after:scale-x-90 after:duration-200 text-sm sm:text-base`

  return (
    <>
      {!mobile ? <ul className={`${customStyle && customStyle} flex gap-4 items-center`}>
        {data?.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={styles} to={item.path} >
                <span>{item.label}</span>
                {Icon && <Icon />}
              </NavLink>
            </li >
          )
        })}
      </ul > : <ul className={`bg-gray-50 duration-200  absolute bottom-0 left-0 right-0 sm:left-[5%] sm:right-[5%] rounded-t-3xl overflow-hidden flex flex-col`}>
        {data?.map((item, index) => (
          <li onClick={(e) => e.stopPropagation()} key={index} className="w-full duration-200">
            <NavLink className={({ isActive }) => `block w-full ${isActive ? `text-indigo-50 bg-indigo-500` : `text-gray-400 hover:text-gray-800`}  text-center p-5`} to={item.path}>
              {Icon && <Icon />}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>}
    </>
  )
}

// =====> EXPORTS
export default CustomNavLink;