import { atomWithStorage } from "jotai/utils";

export const theme = atomWithStorage("dark", false);

export const getThemeColor = (isDark: boolean) => {
  return isDark
    ? {
        color: "#333333",
        backgroundColor: "#ffffff",
      }
    : {
        color: "#ffffff",
        backgroundColor: "#333333",
      };
};

export const getThemeText = (isDark: boolean) => {
  return isDark ? "DARK" : "LIGHT";
};
