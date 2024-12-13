import { create } from "zustand";

const useContactFormStore = create((set) => ({
    step: 1,

    setStep: (value) => set({ step: value }),
}));

export default useContactFormStore;
