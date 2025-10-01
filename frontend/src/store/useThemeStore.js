import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("fusiontalk-theme") || "luxuary",
  setTheme: (theme) => {
    localStorage.setItem("fusiontalk-theme", theme);
    set({ theme });
  },
}));