import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const themeAtom = atomWithStorage("dark", false);

export const themeValueAtom = atom((get) => get(themeAtom));

export const changeThemeAtom = atom(null, (get, set) =>
  set(themeAtom, !get(themeAtom))
);

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
