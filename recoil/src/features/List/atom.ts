import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const listAtom = atom({
  key: "list",
  default: [
    { value: "LIST 1", status: "pending" },
    { value: "LIST 2", status: "pending" },
    { value: "LIST 3", status: "pending" },
    { value: "LIST 4", status: "pending" },
    { value: "LIST 5", status: "pending" },
    { value: "LIST 6", status: "completed" },
    { value: "LIST 7", status: "completed" },
    { value: "LIST 8", status: "completed" },
    { value: "LIST 9", status: "completed" },
    { value: "LIST 10", status: "completed" },
  ],
});
