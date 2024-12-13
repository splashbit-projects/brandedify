import { create } from "zustand";

const usePopupStore = create((set) => ({
  thanksPopupDisplay: false,
  orderPopupDisplay: false,
  requestPopupDisplay: false,
  jobsPopupDisplay: false,
  serviceValue: false,
  serviceType: false,
  jobValue: false,

  setThanksPopupDisplay: (value) => set({ thanksPopupDisplay: value }),
  setOrderPopupDisplay: (value) => set({ orderPopupDisplay: value }),
  setRequestPopupDisplay: (value) => set({ requestPopupDisplay: value }),
  setJobsPopupDisplay: (value) => set({ jobsPopupDisplay: value }),
  setServiceValue: (value) => set({ serviceValue: value }),
  setServiceType: (value) => set({ serviceType: value }),
  setJobValue: (value) => set({ jobValue: value }),
}));

export default usePopupStore;
