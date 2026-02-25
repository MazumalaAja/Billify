// =====> IMPORTS
import { FiBook, FiBox, FiEdit2, FiPlus, FiUser, FiUsers } from "react-icons/fi";
import CustomSection from "@/components/CustomSection";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { RiCalculatorLine, RiEqualLine } from "react-icons/ri";
import { hasil, pembagian, struk, temanPhoto } from "../assets/images";
import useHomePage from "../hooks/useHomePage";
import { useEffect } from "react";


// =====> MY-SETUP
const HomePage = () => {
  // =====> USEHOMEPAGE
  const { handleClickAddTeman, handleChange, input, listTeman } = useHomePage();

  // =====> USEEFFECT
  useEffect(() => {
    console.log(listTeman);
    localStorage.setItem("listTeman", JSON.stringify(listTeman))
    // localStorage.clear();
  }, [listTeman])
  return (
    <>
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-2">
        {/* =====> INPUT TEMAN */}
        <CustomSection Icon={FiUser} title={"Tambahkan teman."}>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-2">
            <CustomInput value={input.namaTeman} onChange={(e) => handleChange("namaTeman", e.target.value)} Icon={FiEdit2} label={"Nama Teman"} />
            <CustomButton onClick={handleClickAddTeman} customStyle={`w-max! text-xs sm:text-sm md:text-base`} Icon={FiPlus} text={"Tambahkan"} />
          </form>
        </CustomSection>

        {/* =====> JUDUL PATUNGAN / SPLIT BILL */}
        <CustomSection title="Tambahkan judul patungan." Icon={FiBook} >
          <CustomInput value={input.title} onChange={(e) => handleChange("title", e.target.value)} Icon={FiEdit2} label={"Judul Patungan"} />
        </CustomSection>

        {/* =====> DAFTAR TEMAN */}
        <CustomSection title="Daftar Teman.." Icon={FiUsers}>
          <div className=" w-full max-w-80 mx-auto">
            <img src={temanPhoto} alt="daftar-teman-picture" />
          </div>

          <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Daftar teman masih kosong!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan tambahkan teman untuk memulai pembagian!</p>
          </div>
        </CustomSection>

        {/* =====> DAFTAR PRODUK ATAU ITEM */}
        <CustomSection title="Tambahkan produk atau item." Icon={FiBox}>
          <div className=" w-full max-w-80 mx-auto">
            <img src={struk} alt="daftar-produk-picture" />
          </div>

          <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Daftar Produk atau item kososng!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan tambahkan produk atau item untuk memulai pembagian!</p>
          </div>
        </CustomSection>

        {/* =====> PEMBAGIAN PRODUK */}
        <CustomSection title="Pembagian." Icon={RiCalculatorLine}>
          <div className=" w-full max-w-80 mx-auto">
            <img src={pembagian} alt="pembagian-picture" />
          </div>

          <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Data masih kosong!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan lengkapi semua data untuk memulai pembagian!</p>
          </div>
        </CustomSection>

        {/* =====> HASIL AKHIR */}
        <CustomSection title="Hasil akhir." Icon={RiEqualLine}>
          <div className=" w-full max-w-80 mx-auto">
            <img src={hasil} alt="hasil-picture" />
          </div>

          <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Data masih kosong!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan lengkapi semua data untuk memulai pembagian!</p>
          </div>
        </CustomSection>
      </div>
    </>
  )
}

// =====> EXPORTS
export default HomePage;