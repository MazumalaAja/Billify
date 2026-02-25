// =====> IMPORTS
import { useState } from "react"

// =====> MY-SETUP
const useHomePage = () => {
  // =====> GET LOCALSTORAGE
  const getLocalData = (key, defaultValue) => {
    const data = localStorage.getItem(key);
    if (data == undefined) return defaultValue;
    try {
      return data ? JSON.parse(data) : defaultValue;
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }

  // =====> STATES
  const [input, setInput] = useState({
    title: "",
    namaTeman: "",
    namaItem: "",
    hargaItem: 0,
    jumlahItem: 0
  })
  const [listTeman, setListTeman] = useState(() => {
    return getLocalData("listTeman", [])
  });

  // =====> HANDLE CLICK
  const handleClickAddTeman = () => {
    setListTeman(prev => [...prev, { id: Date.now(), namaTeman: input.namaTeman, items: [] }]);
    setInput(prev => ({ ...prev, namaTeman: "" }));
  }

  // =====> HANDLE CHANGE
  const handleChange = (key, value) => {
    if (value.trim() == "" || value <= 0) return;
    setInput(prev => ({ ...prev, [key]: value }));
  }

  // RETURN
  return { handleClickAddTeman, handleChange, input, listTeman };
}

// =====> EXPORTS
export default useHomePage;