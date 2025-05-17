import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("globeLink-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("globeLink-theme", theme);
    set({ theme });
  },
}));
