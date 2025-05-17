import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("globeLink-theme") || "dark",
  setTheme: (theme) => {
    localStorage.setItem("globeLink-theme", theme);
    set({ theme });
  },
}));
