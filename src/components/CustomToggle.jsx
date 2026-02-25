// =====> MY-SETUP
const CustomToggle = ({ open, onClick, customStyle }) => {
  return (
    <>
      <div onClick={onClick} className={` ${customStyle && customStyle} flex flex-col gap-1 cursor-pointer`}>
        <span className={`w-6 h-1 duration-200 ${open ? `rotate-45 translate-y-2` : ``} bg-gray-700 rounded-full`}></span>
        <span className={` h-1 duration-200 ${open ? `w-0` : `w-6`} bg-gray-700 rounded-full`}></span>
        <span className={`w-6 h-1 duration-200 ${open ? `-rotate-45 -translate-y-2` : ``} bg-gray-700 rounded-full`}></span>
      </div>
    </>
  )
}

// =====> EXPORTS
export default CustomToggle;