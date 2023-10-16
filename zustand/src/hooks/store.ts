import { create } from "zustand";

type State = {
  count: number;
};

type Action = {
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

const initialState: State = {
  count: 0,
};

export const useStore = create<State & Action>()((set) => ({
  ...initialState,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(initialState),
}));
