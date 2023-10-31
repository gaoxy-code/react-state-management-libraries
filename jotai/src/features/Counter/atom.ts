import { atom } from "jotai";

export const createCountAtoms = (initialValue: number) => {
  const baseAtom = atom(initialValue);
  const valueAtom = atom((get) => get(baseAtom));
  const incrementAtom = atom(null, (get, set, update: number) =>
    set(baseAtom, get(baseAtom) + update)
  );
  const decrementAtom = atom(null, (get, set, update: number) =>
    set(baseAtom, get(baseAtom) - update)
  );

  return { valueAtom, incrementAtom, decrementAtom };
};
