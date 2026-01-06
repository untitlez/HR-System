import { create } from "zustand";

export const useThemeStore = create((set) => ({
  dark: true,
  setDark: () => set((state) => ({ dark: !state.dark })),
}));

export const useActionStore = create((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),

  disabled: false,
  setDisabled: (value) => set({ disabled: value }),

  isSubmitted: false,
  setIsSubmitted: (value) => set({ isSubmitted: value }),

  isModalOpen: false,
  setIsModalOpen: (value) => set({ isModalOpen: value }),
}));

export const useMenuStore = create((set) => ({
  tabsMenu: { label: "", type: "" },
  setTabsMenu: (value) => set({ tabsMenu: value }),
}));
