import { selector } from "recoil";
import { listAtom } from "./atom";

export const listSelector = selector({
  key: "listSelector",
  get: ({ get }) => {
    const list = get(listAtom);
    const completed = list.filter((l) => l.status === "completed");

    return { list, completed };
  },
});
