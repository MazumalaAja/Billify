// =====> IMPORTS
import { create } from "zustand";

// =====> MY-SETUP
const useUIStore = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open }))
}))

// =====> EXPORTS
export default useUIStore;