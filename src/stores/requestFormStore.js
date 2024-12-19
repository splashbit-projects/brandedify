import { create } from "zustand";

const useRequestFormStore = create((set) => ({
    step: 1,

    setStep: (value) => set({ step: value }),
}));

export default useRequestFormStore;
