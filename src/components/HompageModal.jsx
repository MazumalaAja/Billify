// =====> MY-SETUP
export default function ModalHomePage() {
  return (
    <>
      {/* =====> MODAL EDIT */}
      {open.modalEdit && <CustomModal onClose={() => {
        setOpen(prev => ({ ...prev, modalEdit: false }));
        if (input.idTeman) {
          setInput(prev => ({ ...prev, idTeman: null, namaTeman: "" }));
        } else {
          setInput(prev => ({ ...prev, idItem: null, namaItem: "", hargaItem: "", jumlahItem: "" }));
        }
      }} customStyle={`flex justify-center items-center`}>
        <CustomSection customStyle={`w-full max-w-[95%] md:max-w-[60%]`} Icon={input.idTeman ? FiUser : RiBox3Line} title={`${input.idTeman ? `Edit Teman` : `Edit Produk`}`}>
          {input.idTeman && <form onSubmit={(e) => {
            e.preventDefault()
            setOpen(prev => ({ ...prev, modalEdit: false }))
          }} className="flex flex-col md:flex-row gap-2">
            <CustomInput onChange={(e) => handleChange("namaTeman", e.target.value)} value={input.namaTeman} Icon={FiEdit2} label={"Nama Teman"} />
            <CustomButton onClick={() => {
              handleClickTeman("edit", input.idTeman)
            }} customStyle={`w-max! bg-green-500! text-xs sm:text-sm md:text-base`} Icon={FiEdit} text={"Edit"} />
          </form>}
          {input.idItem && <form onSubmit={(e) => {
            e.preventDefault()
            setOpen(prev => ({ ...prev, modalEdit: false }))
          }} className="flex flex-col gap-2">
            <CustomInput onChange={(e) => handleChange("namaItem", e.target.value)} value={input.namaItem} Icon={FiEdit2} label={"Nama Produk"} />
            <CustomInput type={`number`} min={0} onChange={(e) => handleChange("hargaItem", e.target.value)} value={input.hargaItem} Icon={FiEdit2} label={"Harga Produk"} />
            <CustomInput type={`number`} onChange={(e) => handleChange("jumlahItem", e.target.value)} value={input.jumlahItem} Icon={FiEdit2} min={0} label={"Jumlah Produk"} />
            <CustomButton onClick={() => {
              handleClickItem("edit", input.idItem)
            }} customStyle={`w-max! bg-green-500! text-xs sm:text-sm md:text-base`} Icon={FiEdit} text={"Edit"} />
          </form>}
        </CustomSection>
      </CustomModal>}
    </>
  )
}